// export const renderNavbarContent = (url) => {
//   if (url === '#/teams') {
//     return (
//       <header style={styles.header}>
//         <h1>Logo</h1>
//         <div style={styles.middleNav}>
//           <div className="day-of-dev" style={styles.day}>
//             Day 1
//           </div>
//         </div>
//         <div style={styles.rightNav}>
//           <div onClick={handleOpen}>
//             <PopoverItem component={FistIcon} text="Clock In" />
//           </div>
//           <PopoverItem component={RoadmapIcon} text="Roadmap" />
//           <PopoverItem component={TeamSettingsIcon} text="Team Settings" />
//         </div>
//       </header>
//     );
//   }
// };

import {letters} from './letters';

export const setAvatar = (member) => {
  if (member.avatar) {
    return member.avatar;
  } else if(member.avatar === null) {
    const firstLetter = member.firstName.split('')[0].toUpperCase();
    const match = letters.find((letter) => letter === firstLetter);

    return match;
  }
};
