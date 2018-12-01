var util = require( '../../utils/util.js' )
Page( {
  data: {
   
  },
  onReady: function() {
    this.clickName();
  },
  clickName: function( e ) {
    var pros = this.data.projects;
    console.log( "#########################################################################################################" )
    console.log( "##                                               其他项目                                               ##" )
    console.log( "##-----------------------------------------------------------------------------------------------------##" )
    pros.forEach( function( item, index ) {
      console.log( "##        ", item.name + ":" + item.git )
    })
    console.log( "##                                                                                                     ##" )
    console.log( "#########################################################################################################" )
  }
})
