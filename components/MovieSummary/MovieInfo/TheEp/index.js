import Link from "react-scroll/modules/components/Link";
import { } from "parts/TextSection"
import SummarySectionHeading from "parts/SummarySectionHeading";

const list = []
for (let index = 1; index <= 100; index++) {
  list.push(index)
}

const TheEp = ({
  className,
  eps,
  movie,
}) => (
  <>
    {/* <div className={className}>
      <SummarySectionHeading>Tập</SummarySectionHeading>
    </div> */}
    <div className="container-ep">
      {eps.map((elemt, index) => (<a key={index} className="ep-item" href={`/${movie.type}/${movie.id}/tap-${elemt.name}`}>{elemt.name}</a>))}
    </div>
    <style jsx>{`
      .container-ep {
        display:flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
      .ep-item {
        padding: 4px;cursor: pointer; background-color: var(--palette-primary-dark); font-size: 14px;text-align: center; color: white; font-weight:bold; margin-right: 8px; margin-bottom: 8px; min-width: 30px; min-height:30px"
      }
    `}</style>
  </>



);

export default TheEp;
