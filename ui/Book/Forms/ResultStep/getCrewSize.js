const floor = [
  'storage unit', //0
  'elevator building', //1
  'private house', //2
  'storage unit', //3
  '1st/ground floor', //4
  '2nd floor', //5
  '3rd floor', //6
  '4th floor', //7
];

const apt = [
  'Room or less (partial move)', //0
  'Studio apartment', //1
  '1 Bedroom apartment', //2
  '2 Bedroom apartment', //3
  '2 Bedroom House/Townhouse', //4
  '3+ Bedroom apartment', //5
  '3 Bedroom House/Townhouse', //6
  '4+ Bedroom House/Townhouse', //7
  'Office / Commercial space', //8
];

export const getCrewSize = (apartment, fromFloor, toFloor) => {
  let nr = 2;
  for (let i = 0; i < apt.length; i++) {
    if (apt[i] === apartment) {
      for (let j = 0; j < floor.length; j++) {
        if (floor[j] === fromFloor) {
          for (let k = 0; k < floor.length; k++) {
            if (floor[k] === toFloor) {
              // logic starts from big to small

              // 4+ bdrm house/office
              if (i >= 7) {
                return (nr += 2);
              }

              // 3 bdrm apt/house
              if (i >= 5) {
                if (j > 5 || k > 5) {
                  return (nr += 2);
                } else return (nr += 1);
              }

              // 2bdr apt/house
              if (i >= 3) {
                if (j > 6 || k > 6) {
                  return (nr += 2);
                }
                return (nr += 1);
              }

              // 1 brdrm / studio
              if (i > 1) {
                // return (nr += 1);
                if (j > 5 || k > 5) {
                  return (nr += 1);
                } else if (j === 5 && k === 5) {
                  return (nr += 1);
                } else return nr;
              }
            }
          }
        }
      }
    }
  }
  // console.log('crew Size--->', nr);
  return nr;
};

export const getCrewSizeFlatRate = (apartment, fromFloor, toFloor) => {
  let nr = 2;
  for (let i = 0; i < apt.length; i++) {
    if (apt[i] === apartment) {
      for (let j = 0; j < floor.length; j++) {
        if (floor[j] === fromFloor) {
          for (let k = 0; k < floor.length; k++) {
            if (floor[k] === toFloor) {
              // logic starts from big to small

              // 4+ bdrm house/office
              if (i >= 7) {
                return (nr += 2);
              }

              // 3 bdrm apt/house
              if (i >= 5) {
                if (j > 5 || k > 5) {
                  return (nr += 1);
                } else return (nr += 1);
              }

              // 2bdr apt/house
              if (i >= 3) {
                return (nr += 1);
              }

              if (i > 1) {
                // return (nr += 1);
                if (j >= 6 && k >= 6) {
                  return (nr += 1);
                } else return nr;
              }
            }
          }
        }
      }
    }
  }
  // console.log('crew Size--->', nr);
  return nr;
};

export const getCrewSizeLoadingUnloading = (apartment, fromFloor) => {
  let nr = 2;
  for (let i = 0; i < apt.length; i++) {
    if (apt[i] === apartment) {
      for (let j = 0; j < floor.length; j++) {
        if (floor[j] === fromFloor) {
          // 4+ bdrm house/office
          if (i >= 7) {
            return (nr += 2);
          }

          // 3 bdrm apt/house
          if (i >= 5) {
            if (j >= 5) {
              return (nr += 2);
            } else return (nr += 1);
          }

          // 2bdr apt/house
          if (i >= 3) {
            return (nr += 1);
          }

          // 1 brdrm / studio
          if (i >= 1) {
            if (j > 5) {
              return (nr += 1);
            }
            return nr;
          }
        }
      }
    }
  }
  // console.log('crew Size--->', nr);
  return nr;
};
