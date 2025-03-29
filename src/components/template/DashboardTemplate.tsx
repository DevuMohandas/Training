import React from 'react';

type DashboardTemplateProps = {
  topBar: React.ReactNode;
  sideBar: React.ReactNode;
  welcomeCard: React.ReactNode;
  centerNavbar: React.ReactNode;
  rowPost: React.ReactNode;
};

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ topBar, sideBar, welcomeCard, centerNavbar, rowPost }) => {
  return (
    <div className="flex flex-col h-screen bg-body">
      <div className="w-full">{topBar}</div>
      <div className="flex h-full">
        {sideBar}
        <div className="flex flex-col w-full px-space-04">
          {welcomeCard}
          <div className="-mt-space-12 flex justify-center">{centerNavbar}</div>
          <div className="pt-space-12 px-space-08">
            {rowPost}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;

// {/* <div className="flex justify-center bg-[#040508]">
//       <div className="max-w-[1600px] h-screen">
//         <div>{topBar}</div>
//         <div className="flex h-full">
//           <div className="h-full bg-amber-300">{sideBar}</div>
//           <div className="flex flex-col w-full md:px-space-04">
//             <div>{welcomeCard}</div>
//             <div className="-mt-space-10 flex justify-center w-full">
//               {centerNavbar}
//             </div>
//             <div className="px-space-08 bg-amber-100">
//               <div className="mt-space-12">{rowPost}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> */}
