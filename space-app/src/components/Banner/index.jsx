import styled from 'styled-components';
import bannerBackGround from '../../assets/banner.png';

const BannerEstilizado = styled.div`
  background-image: url(${bannerBackGround});
  display: flex;
  background-color: white;
  width: 1156px;
  height: 328px;
  justify-content: start;
  align-items: center;
  border-radius: 20px;

  h1 {
    margin-left:  3rem;
    color: #ffffff;
    width: 301px;
    height: 144px;
    top: 284px;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    text-align: left;
  }
`;
export const Banner = () => {
  return (
    <BannerEstilizado>
      <h1>A galeria mais completa de fotos do espaço!</h1>
    </BannerEstilizado>
  );
};
