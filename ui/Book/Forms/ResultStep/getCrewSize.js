const floor = [
  "storage unit", //0
  "private house", //2
  "elevator building", //1
  "1st/ground floor", //3
  "2nd floor", //4
  "3rd floor", //5
  "4th floor", //6
];

const apt = [
  "Room or less (<300 cb.ft.)", //0
  "Studio apartment", //1
  "Small 1 Bedroom apartment", //2
  "Large 1 Bedroom apartment", //3
  "Small 2 Bedroom apartment", //4
  "Large 2 Bedroom apartment", //5
  "3 Bedroom apartment", //6
  "2 Bedroom House/Townhouse", //7
  "3 Bedroom House/Townhouse", //8
  "4+ Bedroom House/Townhouse", //9
  "Office / Commercial move", //10
];

const crewSize = {
  "Room or less (<300 cb.ft.)": {
    crewSize: [
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
    ],
  },
  "Studio apartment": {
    crewSize: [
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 3, 3],
      [2, 2, 2, 2, 2, 3, 3],
    ],
  },
  "Small 1 Bedroom apartment": {
    crewSize: [
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 3, 3],
      [2, 2, 2, 2, 2, 3, 3],
      [2, 2, 2, 3, 3, 3, 3],
      [2, 2, 2, 3, 3, 3, 3],
    ],
  },
  "Large 1 Bedroom apartment": {
    crewSize: [
      [3, 3, 3, 2, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [2, 3, 3, 2, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
    ],
  },
  "Small 2 Bedroom apartment": {
    crewSize: [
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
    ],
  },

  "Large 2 Bedroom apartment": {
    crewSize: [
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 4, 4],
      [3, 3, 3, 3, 3, 4, 4],
    ],
  },
  "3 Bedroom apartment": {
    crewSize: [
      [3, 4, 4, 3, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [3, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
    ],
  },
  "2 Bedroom House/Townhouse": {
    crewSize: [
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 4, 4],
      [3, 3, 3, 3, 3, 4, 4],
    ],
  },
  "3 Bedroom House/Townhouse": {
    crewSize: [
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
    ],
  },
  "4+ Bedroom House/Townhouse": {
    crewSize: [
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4],
    ],
  },
  "Office / Commercial move": {
    crewSize: [
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
    ],
  },
};

export const getCrewSize = (apartment, fromFloor, toFloor) => {
  return crewSize[apartment].crewSize[floor.indexOf(fromFloor)][
    floor.indexOf(toFloor)
  ];
};

export const getCrewSizeFlatRate = (apartment, fromFloor, toFloor) => {
  return crewSize[apartment].crewSize[floor.indexOf(fromFloor)][
    floor.indexOf(toFloor)
  ];
};

export const getCrewSizeLoadingUnloading = (apartment, fromFloor) => {
  return crewSize[apartment].crewSize[floor.indexOf(fromFloor)][0];
};
