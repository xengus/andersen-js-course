function Request () {
  fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(response => response.json)
    .then(({ getUsersData }) => {
      if (getUsersData === true) {
        fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
          .then(response => response.json())
          .then(data => {
            console.log(data);
          });
      }
    });
}
