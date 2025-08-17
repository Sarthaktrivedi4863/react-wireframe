// import React from 'react';

// const Team = () => (
//   <section style={styles.section}>
//     <h2>MEET THE TEAM</h2>
//     <div style={{ display: 'flex', gap: '50px',justifyContent: 'center' }}>
//       {[1, 2, 3].map(i => (
//         <div key={i} style={styles.profile}>
//           <div style={styles.image}>[Profile]</div>
//           <p>Name</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// const styles = {
//     section:{textAlign:'center',padding:'40px'},
//   profile: { textAlign: 'center' },
//   image: { width: '100px', height: '100px', background: '#ccc', borderRadius: '50%' }
// };

// export default Team;
import React from 'react';

const teamMembers = [
  { id: 1, name: 'Adv. Sarthak Trivedi', image: '/images/01.jpg', role: 'Civil Law Specialist' },
  { id: 2, name: 'Adv. Pratham Awasthi', image: '/images/02.jpg', role: 'Corporate Law Expert' },
  { id: 3, name: 'Adv. Aditya Jaitely', image: '/images/03.jpg', role: 'Criminal Defense Attorney' },
];

const Team = () => (
  <section style={styles.section}>
    <h2 style={styles.heading}>MEET THE TEAM</h2>
    <p>A true pillar of justice, we will stands with unwavering integrity and eloquence. His wisdom guides, his voice defends, and his presence commands respect. Tireless in pursuit of truth, compassionate in counsel, and fearless in advocacy—he embodies the very spirit of law. An advocate not just by profession, but by purpose.
</p>
<br /><br />
    <div style={styles.grid}>
      {teamMembers.map((member) => (
        <div key={member.id} style={styles.profile}>
          <img
            src={member.image}
            alt={member.name}
            style={styles.image}
          />
          <p style={styles.name}>{member.name}</p>
          <p style={styles.role}>{member.role}</p>
        </div>
      ))}
    </div>
  </section>
);

const styles = {
  section: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '30px',
    fontWeight: '600',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '80px',
    flexWrap: 'wrap',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '200px',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  name: {
    marginTop: '10px',
    fontWeight: '600',
  },
  role: {
    fontSize: '14px',
    color: '#555',
  },
};

export default Team;