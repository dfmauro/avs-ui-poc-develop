import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-actions-menu',
  templateUrl: './actions-menu.component.html',
  styleUrls: ['./actions-menu.component.scss']
})
export class ActionsMenuComponent implements OnInit {

  zoom: any;
  width = 800;
  height = 600;

  constructor() { }

  ngOnInit(): void {
    this.zoom = d3.zoom()
      .scaleExtent([0.25, 10])
      .on('zoom', this.handleZoom);

    this.initZoom();
  }

  initZoom() {
    d3.select('svg')
      .call(this.zoom);
  }

  handleZoom(e: any) {
    d3.select('svg g')
      .attr('transform', e.transform);
  }

  zoomIn() {
    d3.select('svg')
      .transition()
      .call(this.zoom.scaleBy, 2);
  }

  zoomOut() {
    d3.select('svg')
      .transition()
      .call(this.zoom.scaleBy, 0.5);
  }

  resetZoom() {
    d3.select('svg')
      .transition()
      .call(this.zoom.scaleTo, 1);
  }

  center() {
    d3.select('svg')
      .transition()
      .call(this.zoom.translateTo, 0.5 * this.width, 0.5 * this.height);
  }

  panLeft() {
    d3.select('svg')
      .transition()
      .call(this.zoom.translateBy, -50, 0);
  }

  panRight() {
    d3.select('svg')
      .transition()
      .call(this.zoom.translateBy, 50, 0);
  }
}
