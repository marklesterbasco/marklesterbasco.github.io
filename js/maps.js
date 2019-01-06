function initialize() {
    google.maps.visualRefresh = true;

    var mapDiv = document.getElementById('googft-mapCanvas');
    
    //map options
    var map = new google.maps.Map(mapDiv, {
      center: new google.maps.LatLng(9.5850433,77.3892475),
      zoom: 3,
      zoomControl: true,
      zoomControlOptions: {
          style: google.maps.ZoomControlStyle.DEFAULT,
        },
      disableDoubleClickZoom: true,
      mapTypeControl: true,
      mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
      scaleControl: true,
      scrollwheel: false,
      panControl: true,
      streetViewControl: true,
      draggable : true,
      overviewMapControl: true,
      overviewMapControlOptions: {
          opened: true,
      },

      mapTypeId: google.maps.MapTypeId.ROADMAP,
        
    //map styles
    styles: [{
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{
                "visibility": "on" },
            {
                "color": "#e0efef" }]
         },
        {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [{
                "visibility": "on" },
            {
                "hue": "#1900ff" },
            {
                "color": "#c0e8e8" }]
        },
        {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
                "lightness": 100},
            {
                "visibility": "simplified" }]
        },
        {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
                "visibility": "off"}]
        },
        {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
                "visibility": "on" },
            {
                "lightness": 700 }]
        },
        {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
                "color": "#7dcdcd" }] 
        }],
    });
    
    //countries
    firstlayer = new google.maps.FusionTablesLayer({
    map: map,
    heatmap: { enabled: false },
    query: {
      select: "KML",
      from: "1W8YMfgCG5RRZGkcVxxWbu3Ok_hURTVU80dtu4-BS",
      where: ""
    },
      options: {
        styleId: 2,
        templateId: 2
      },
    });

    //province
    secondlayer = new google.maps.FusionTablesLayer({
    map: map,
    heatmap: { enabled: false },
    query: {
      select: "KML",
      from: "1kwNqhWuozIoU9VMSGuz1-rDN0ffAZB4eorcgfWrB",
      where: ""
    },
      options: {
        styleId: 2,
        templateId: 2
      },
    });
    
 
    //places
    thirdlayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "Location",
        from: "1Q16f1Gy7LkO5otXq5NsTOs7U2ILNrxuXSePbBVLx",
        where: ""
      },
      options: {
        styleId: 6,
        templateId: 7
      },

    });
    

  }

  google.maps.event.addDomListener(window, 'load', initialize);