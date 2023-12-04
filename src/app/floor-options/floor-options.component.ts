import { AfterViewInit, Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-floor-options',
  templateUrl: './floor-options.component.html',
  styleUrls: ['./floor-options.component.scss']
})
export class FloorOptionsComponent implements AfterViewInit {
  
  private toiletData: any;

  constructor() { }

  ngAfterViewInit() {
    this.getReplacementSvgs();
  }

  private getReplacementSvgs(): void {
    
    d3.xml("/assets/svgs/toilet.svg").then(xml => {
      this.toiletData = xml.documentElement;
    });
  }

  replaceSvg() {

    let allSelectedItems = d3.selectAll(".selected");

    //Depending on the object, we should get the current position of the item from the appropiate property before deleting
    allSelectedItems.nodes().forEach(item => {
      d3.select(item).remove();
    });

    //Add element to svg (it should be in the exact position of the removed item, when we have this defined)
    let svg: any = d3.select("g#terrain-layer");
    if(svg != null) {
      svg.node().append(this.toiletData);
    }
  }
}
