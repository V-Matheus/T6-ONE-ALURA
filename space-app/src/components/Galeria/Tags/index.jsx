import tags from './tags.json';

export const Tags = () => {
  return (
    <div>
      <p>Busque por tags:</p>
      {tags.map((tag) => (
        <button key={tag.id}>{tag.titulo}</button>
      ))}
    </div>
  );
};
