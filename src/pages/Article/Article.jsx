import Callout from './Components/Callout/Callout';
import ImageBlock from './Components/ImageBlock/ImageBlock';
import Paragraph from './Components/Paragraph/Paragraph';

function Article () {
  const main_image =
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop';
  return (
    <div className="flex flex-col items-center gap-4 relative top-16">
      <h2 className="article_title text-center text-4xl font-bold text-orange-400 underline cursor-pointer">
        Introduction To AI
      </h2>
      <img
        src={main_image}
        alt=""
        className="article_main_image rounded-2xl border size-96 border-orange-400 aspect-video"
      />
      <div className="article_content p-20">
        <Paragraph />
        <Callout />
        <ImageBlock image_url={main_image} />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
            </tr>
            <tr>
              <td>Data 7</td>
              <td>Data 8</td>
              <td>Data 9</td>
            </tr>
          </tbody>
        </table>
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Paragraph />
      </div>
    </div>
  );
}

export default Article;
