import { Linkedin, Mail } from 'lucide-react';
import Img1 from './naruto.webp';
import Img2 from './hinata.webp'
const Team = () => {
  const team = [
    {
      name: 'Anbarasan Shanmugam',
      role: 'Founder & CEO',
      image: Img1,
      linkedin: '#',
      email: 'john@tickmybus.com'
    },
    {
      name: 'Keertheeswari Anbarasan',
      role: 'Operations Director',
      image: Img2,
      linkedin: '#',
      email: 'sarah@tickmybus.com'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4"> {/* Changed py-12 to pt-32 */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our <span className='text-red-600'>Team</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals working behind the scenes to make your
            journey comfortable and hassle-free.
          </p>
        </div>

        {/* Team Cards */}
        <div className="flex justify-center items-stretch gap-8 flex-wrap max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden w-96 transform transition-transform duration-300 hover:scale-105"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-blue-600 mb-4">{member.role}</p>

                {/* Contact Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={member.linkedin}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;