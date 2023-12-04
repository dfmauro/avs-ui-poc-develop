import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss']
})

export class FloorPlanComponent implements OnInit {

  private svg: any;
  private width = 800;
  private height = 600;
  private selectedLote: any;

  private _availableIds = [
    "lt-1", 
    "lt-2",
    "lt-3", 
    "lt-4", 
    "lt-5", 
    "lt-6",
    "lt-7"
  ];

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawSvgContent();
  }

  private createSvg(): void {
    this.svg = d3.select("figure#graph")
      .append("svg")
      .attr("class", "svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("id", "terrain")
  }

  private drawSvgContent(): void {
    
    d3.xml("/assets/svgs/terrain.svg").then(xml => {
      this.svg.node().append(xml.documentElement);
      this.paintSvg();
    });
  }

  private async paintSvg() {
    
    //assign class "lote" to all polygons
    d3.selectAll("polygon").classed("lote", true);
    d3.selectAll("path").classed("lote", true);

    var available = await this.getAvailableLotIds();

    d3.selectAll(".lote")
      .filter(
        (el, idx, arr: any) => available.includes(arr[idx].id), 
      )
      .classed("available", true)
      .on('click', (el: any) => {
        this.selectedLote = d3.select(el.target);
        this.getLotActions();
      });
  }

  private async getAvailableLotIds() {
    return this._availableIds;
  }

  getLotActions() {
    this.selectedLote
      .classed('selected', true)
  }
}
