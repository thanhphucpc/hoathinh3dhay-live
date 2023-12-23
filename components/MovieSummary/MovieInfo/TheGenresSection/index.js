
import SummarySectionHeading from 'parts/SummarySectionHeading';
import GenreLink from './GenreLink';

const TheGenresSection = ({
  className,
  genres
}) => (
  <>
    <div className={className}>
      <SummarySectionHeading>Thể loại</SummarySectionHeading>
      <div className='the-genres'>
        {/* {genres.map(genre => (
          <GenreLink
            key={genre.id}
            genre={genre} />
        ))} */}
        {[{ id: "1", name: "Tu tiên" }, { id: "2", name: "Xuyên không" },  { id: "4", name: "Trùng sinh" },{ id: "3", name: "Luyện cấp" }].map(genre => (
          <GenreLink
            key={genre.id}
            genre={genre} />
        ))}
      </div>
    </div>
    <style jsx>{`
      .the-genres {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
    `}</style>
  </>
);

export default TheGenresSection;
