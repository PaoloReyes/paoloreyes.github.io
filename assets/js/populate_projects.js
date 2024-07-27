const projects = {'autonomous-robot': {'date': '2024-06-14', 'category': 'Robotics', 'title': 'Autonomous Robot'}, 'paint-machinev2': {'date': '2024-06-01', 'category': 'Robotics', 'title': 'Paint Machine V2'}, 'robotics-teaching': {'date': '2024-05-28', 'category': 'Robotics', 'title': 'Robotics Teaching'}, 'robo-uaq': {'date': '2024-05-17', 'category': 'Robotics', 'title': 'ROBOUAQ'}, 'paint-machinev1': {'date': '2024-05-11', 'category': 'Robotics', 'title': 'Paint Machine V1'}, 'cv-drone': {'date': '2024-04-29', 'category': 'Programming', 'title': 'Computer Vision Drone'}, '3D-object-manipulation': {'date': '2024-03-14', 'category': 'Programming', 'title': '3D Manipulation'}, 'motor-control-MCR': {'date': '2024-03-12', 'category': 'Robotics', 'title': 'Speed Control'}, 'first-2024': {'date': '2024-03-02', 'category': 'Robotics', 'title': 'FIRST 2024'}, 'compound-interest-predicter': {'date': '2024-02-03', 'category': 'Finance', 'title': 'Compound Interest Grapher'}, 'mlpdf': {'date': '2023-12-24', 'category': 'Programming', 'title': 'Mercado Libre Parser'}, 'smart-city': {'date': '2023-11-30', 'category': 'Robotics', 'title': 'Smart City'}, 'avrunner': {'date': '2023-11-03', 'category': 'Programming', 'title': 'AVRunner'}, 'wav-player': {'date': '2023-10-25', 'category': 'Electronics', 'title': 'Wav Player'}, 'fourier-series': {'date': '2023-09-03', 'category': 'Programming', 'title': 'Complex Fourier Series'}, 'stock-portfolio': {'date': '2023-06-29', 'category': 'Programming', 'title': 'Stock Portfolio'}, 'engineeringexpofj2023': {'date': '2023-06-20', 'category': 'Robotics', 'title': 'Engineering Expo 06-2023'}, 'solidworks': {'date': '2023-03-26', 'category': '3D Design', 'title': 'SolidWorks Certifications'}, 'first-puebla': {'date': '2023-03-20', 'category': 'Robotics', 'title': 'FIRST Puebla'}, 'variable-power-supply': {'date': '2023-03-15', 'category': 'Electronics', 'title': 'Variable Power Supply'}, 'logic-design': {'date': '2023-02-27', 'category': 'Programming', 'title': 'Logic Design Page'}, 'dif-arduino': {'date': '2023-01-30', 'category': 'Robotics', 'title': 'DIF ARDUINO'}, 'first-2023': {'date': '2023-01-20', 'category': 'Robotics', 'title': 'FIRST 2023'}, 'first-national': {'date': '2022-12-10', 'category': 'Mechanics', 'title': 'FIRST National'}, 'iot-vegetable-patch': {'date': '2022-11-28', 'category': 'Electronics', 'title': 'IOT Vegetable patch'}, 'robociety': {'date': '2022-10-29', 'category': 'Robotics', 'title': 'Robociety'}, 'regata': {'date': '2022-09-22', 'category': 'Mechanics', 'title': 'Industrial Regatta'}, 'competitive-programming': {'date': '2022-09-15', 'category': 'Programming', 'title': 'Competitive Programming'}, 'paolo-inspires': {'date': '2022-09-11', 'category': 'Other', 'title': 'Paolo Inspires'}, 'tec-courses': {'date': '2022-08-20', 'category': 'Robotics', 'title': 'TEC Courses'}, 'coffee-shop': {'date': '2022-08-04', 'category': 'Mechanics', 'title': 'Coffee Shop'}, 'dif-lego': {'date': '2022-07-20', 'category': 'Robotics', 'title': 'DIF LEGO'}, 'PLAN-foundation': {'date': '2022-07-13', 'category': 'Other', 'title': 'PLAN Foundation'}, 'library': {'date': '2022-02-20', 'category': 'Mechanics', 'title': 'Library'}, 'first-2022': {'date': '2022-01-07', 'category': 'Robotics', 'title': 'FIRST 2022'}, 'iron-man': {'date': '2021-10-30', 'category': 'Electronics', 'title': 'Iron Man'}, 'e-bike': {'date': '2021-10-10', 'category': 'Electronics', 'title': 'E-Bike'}, 'aerodesign': {'date': '2021-08-20', 'category': '3D Design', 'title': 'Aerodesign'}, 'router-cnc': {'date': '2021-07-25', 'category': 'Mechanics', 'title': 'Router CNC'}, 'evolution-up': {'date': '2021-07-23', 'category': 'Other', 'title': 'Evolution Up'}, 'stabilizer': {'date': '2021-07-11', 'category': 'Electronics', 'title': 'Stabilizer'}, 'anetA8-plotter': {'date': '2021-06-20', 'category': 'Electronics', 'title': 'Anet A8 Plotter'}, 'anet-autolevel': {'date': '2021-06-19', 'category': 'Electronics', 'title': 'Anet Autolevel'}, 'rlc': {'date': '2021-05-30', 'category': 'Robotics', 'title': 'Room Light Changer'}, 'strange-robot': {'date': '2021-05-23', 'category': 'Robotics', 'title': 'Strange Robot'}, 'arduino-courses': {'date': '2021-04-23', 'category': 'Electronics', 'title': 'Arduino Courses'}, 'first-2021-3': {'date': '2021-01-05', 'category': 'Robotics', 'title': 'FIRST 2021 (Real)'}, 'robot-diferencial': {'date': '2020-12-15', 'category': 'Robotics', 'title': 'Differential Robot'}, 'skeleton-tracking': {'date': '2020-12-08', 'category': 'Programming', 'title': 'Skeleton Tracking'}, 'first-2021-2': {'date': '2020-11-20', 'category': 'Robotics', 'title': 'FIRST 2021 (Concept)'}, 'robotic-hand': {'date': '2020-10-20', 'category': 'Robotics', 'title': 'Robotic Hand'}, 'plotter-cnc': {'date': '2020-10-15', 'category': 'Mechanics', 'title': 'Plotter CNC'}, 'first-2021-1': {'date': '2020-09-07', 'category': 'Robotics', 'title': 'FIRST 2021 (FTC)'}, 'eggcnc': {'date': '2020-09-05', 'category': 'Mechanics', 'title': 'Egg CNC'}, 'roc': {'date': '2020-07-14', 'category': 'Robotics', 'title': 'Room Occupancy Counter'}, 'rubiks-cube-solver': {'date': '2020-06-10', 'category': 'Robotics', 'title': "Rubik's Cube solver"}, 'bazoobed': {'date': '2020-04-15', 'category': 'Robotics', 'title': 'Bazoobed'}, '3D-filter': {'date': '2020-04-12', 'category': '3D Design', 'title': '3D Filter'}, 'first-2020-2': {'date': '2020-01-08', 'category': 'Robotics', 'title': 'FIRST 2020 (FRC)'}, 'wheelchair': {'date': '2019-11-27', 'category': 'Robotics', 'title': 'Wheelchair'}, 'first-2020-1': {'date': '2019-09-09', 'category': 'Robotics', 'title': 'FIRST 2020 (FTC)'}, 'e-gokart': {'date': '2019-07-19', 'category': 'Mechanics', 'title': 'E-GoKart'}, 'kenya': {'date': '2019-06-28', 'category': 'Other', 'title': 'Kenya'}, 'first-2019-2': {'date': '2019-01-07', 'category': 'Robotics', 'title': 'FIRST 2019 (FRC)'}, 'first-2019-1': {'date': '2018-09-10', 'category': 'Robotics', 'title': 'FIRST 2019 (FTC)'}, 'oci-2015': {'date': '2015-07-10', 'category': 'Other', 'title': 'OCI 2015'}};

let projectsList = document.getElementById('projects-list');

let htmlString = '';

for (const project in projects) {
    const projectData = projects[project];
    const category = projectData['category'];
    const title = projectData['title'];

    htmlString += `
        <li class="project-item active" data-filter-item data-category="${category}">
        <a href="/projects/${project}">
            <figure class="project-img">
            <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="./assets/images/${project}_profile.jpg" alt="${project}" loading="lazy">
            </figure>
            <h3 class="project-title">${title}</h3>
            <p class="project-category">${category}</p>
        </a>
        </li>
    `;
};

projectsList.innerHTML = htmlString;