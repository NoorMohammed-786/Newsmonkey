import React, { use, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Pages(props) {

  //   {
  //     id: "32b034b47ca850e54999ff5754e87fb1",
  //     title: "Afghanistan crush Hong Kong by 94 runs in Asia Cup opener",
  //     description:
  //       "Sediqullah Atal scored 73 as Afghanistan defeated Hong Kong by 94 runs in the AFC Asia Cup in Abu Dhabi on Tuesday..AFC Asia Cup, Afghanistan cricket, Hong Kong cricket, cricket scores, Afghanistan vs Hong Kong, Sediqullah Atal, Azmatullah, Fazalhaq Farooqi, Rashid Khan, Group B AFC Asia Cup, cricket match results, Asia Cup 2024, India cricket team, Suryakumar Yadav, cricket news",
  //     content:
  //       "Afghanistan crushed Hong Kong by 94 runs in the opening match of the AFC Asia Cup in Abu Dhabi on Tuesday.\nChasing a target of 189, Hong Kong were restricted to 94/9. Babar Hayat top-scored with 39 runs, while Fazalhaq Farooqi bagged 2/16 and Gulbadi... [544 chars]",
  //     url: "https://www.onmanorama.com/sports/cricket/2025/09/09/afc-asia-cup-afghanistan-vs-hong-kong.html",
  //     image:
  //       "https://img.onmanorama.com/content/dam/mm/en/archive/sports/cricket/images/2025/9/9/afghanistan-vs-hong-kong-asia-cup.jpg",
  //     publishedAt: "2025-09-09T18:31:28Z",
  //     lang: "en",
  //     source: {
  //       id: "60c457b35b486691319f105c3a760060",
  //       name: "Malayala Manorama",
  //       url: "https://www.onmanorama.com",
  //       country: "in",
  //     },
  //   },

  //   {
  //     id: "a9e558527dc2ea4563e1a2054c32c6d1",
  //     title: "Abhishek Sharma: India's New Ace in T20 Cricket",
  //     description:
  //       "Indian cricketer Abhishek Sharma has emerged as a standout T20 performer since October 2023, amassing 2,332 runs in 66 matches with a striking average of 36.43 and a strike rate of 198.29. The Yuvraj Singh-mentored player showcases a powerful batting style, making significant contributions in major tournaments including the IPL and Syed Mushtaq Ali Trophy.",
  //     content:
  //       "Indian cricket sensation Abhishek Sharma enters the Asia Cup with compelling credentials. Since October 2023, Sharma has accumulated an impressive 2,332 runs in the T20 format, leading with the highest strike rate for Indian batsmen. His prowess was ... [838 chars]",
  //     url: "https://www.devdiscourse.com/article/sports-games/3621661-abhishek-sharma-indias-new-ace-in-t20-cricket",
  //     image:
  //       "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/09_09_2025_23_35_36_7915104.jpg?width=920&format=jpeg",
  //     publishedAt: "2025-09-09T18:06:06Z",
  //     lang: "en",
  //     source: {
  //       id: "c6a01ba91c1a2bc3f53f4707110bfee5",
  //       name: "Devdiscourse",
  //       url: "https://www.devdiscourse.com",
  //       country: "in",
  //     },
  //   },

  //   {
  //     id: "b8789ee0006c2c77d200bdd1079dc570",
  //     title:
  //       "India Asia Cup 2025 Full Schedule: LIVE Streaming, Fixtures, Squad, Venues, IND vs PAK Match Details and All You Need to Know",
  //     description:
  //       "India Asia Cup 2025 Full Schedule: LIVE Streaming, Fixtures, Squad, Venues, IND vs PAK Match Details and All You Need to Know - Indian National Cricket Team Asia Cup 2025 Schedule: Reigning champions India will begin their Asia Cup 2025 journey against hosts ... Find Latest cricket articles and live match coverage on www.lokmattimes.com",
  //     content:
  //       "Indian National Cricket Team Asia Cup 2025 Schedule: Reigning champions India will begin their Asia Cup 2025 journey against hosts United Arab Emirates at the Dubai International Cricket Stadium on September 10. Led by Suryakumar Yadav, India aim to ... [1665 chars]",
  //     url: "https://www.lokmattimes.com/cricket/news/india-asia-cup-2025-full-schedule-live-streaming-fixtures-squad-venues-ind-vs-pak-match-details-and-all-you-need-to-know-a507/",
  //     image:
  //       "https://d3pc1xvrcw35tl.cloudfront.net/ln/images/686x514/india-asia-cup-2025-full-schedule_202509998032.jpg",
  //     publishedAt: "2025-09-09T17:45:55Z",
  //     lang: "en",
  //     source: {
  //       id: "f2ddccedc9e60d844e7a1045928cad48",
  //       name: "Lokmat Times",
  //       url: "https://www.lokmattimes.com",
  //       country: "in",
  //     },
  //   },
  //   {
  //     id: "d6e8429cfedb343f8d065d3fef4f946f",
  //     title:
  //       "New Record! Afghanistan all-rounder Azmatullah Omarzai creates history, becomes fastest batter to...",
  //     description:
  //       "Cricket News: Azmatullah Omarzai's explosive fifty off just 20 balls propelled Afghanistan to a formidable total against Hong Kong in their Asia Cup opener. Omarzai",
  //     content:
  //       "Azmatullah Omarzai's explosive fifty off just 20 balls propelled Afghanistan to a formidable total against Hong Kong in their Asia Cup opener. Omarzai's record-breaking innings, surpassing Mohammad Nabi's previous best, helped Afghanistan score 78 ru... [1801 chars]",
  //     url: "https://timesofindia.indiatimes.com/sports/cricket/asia-cup/new-record-afghanistan-all-rounder-azmatullah-omarzai-creates-history-becomes-fastest-batter-to-/articleshow/123791729.cms",
  //     image:
  //       "https://static.toiimg.com/thumb/msid-123791917,width-1070,height-580,imgsize-201890,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //     publishedAt: "2025-09-09T17:44:00Z",
  //     lang: "en",
  //     source: {
  //       id: "9a9a0fb79c70bbf499d39baca94921ae",
  //       name: "Times of India",
  //       url: "https://timesofindia.indiatimes.com",
  //       country: "in",
  //     },
  //   },
  //   {
  //     id: "c8b32aad1a902cde6938530591478b8d",
  //     title:
  //       "Asia Cup 2025: 'This is not a curtain raiser, it's only a curtain' - R Ashwin slams lack of competition against India",
  //     description:
  //       "Cricket News: Ravichandran Ashwin has criticised the Asia Cup 2025, questioning the competitiveness for Team India. He suggested the inclusion of India A or a combi",
  //     content:
  //       "Ravichandran Ashwin has criticised the Asia Cup 2025, questioning the competitiveness for Team India. He suggested the inclusion of India A or a combined Afro-Asia team to create a real challenge. Ashwin doubted other teams could compete with India's... [2292 chars]",
  //     url: "https://timesofindia.indiatimes.com/sports/cricket/asia-cup/asia-cup-2025-this-is-not-a-curtain-raiser-its-only-a-curtain-r-ashwin-slams-lack-of-competition-against-india/articleshow/123791717.cms",
  //     image:
  //       "https://static.toiimg.com/thumb/msid-123791776,width-1070,height-580,imgsize-64064,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //     publishedAt: "2025-09-09T17:36:00Z",
  //     lang: "en",
  //     source: {
  //       id: "9a9a0fb79c70bbf499d39baca94921ae",
  //       name: "Times of India",
  //       url: "https://timesofindia.indiatimes.com",
  //       country: "in",
  //     },
  //   },
  //   {
  //     id: "03dbafad85806771cb65027d59878ebd",
  //     title:
  //       "Arshdeep watches UAE batters practice their strokes ahead of Asia Cup opener",
  //     description:
  //       "Arshdeep watches UAE batters practice their strokes ahead of Asia Cup opener - Dubai [UAE], September 9 : Indian left-armer Arshdeep Singh saw UAE batters practising out in nets ahead of their ... Find Latest cricket articles and live match coverage on www.lokmattimes.com",
  //     content:
  //       "Dubai [UAE], September 9 : Indian left-armer Arshdeep Singh saw UAE batters practising out in nets ahead of their Asia Cup campaign opener in Dubai on Wednesday.\nTeam India, the 2023 50-over Asia Cup winners, will be aiming to add another T20 Asia Cu... [1617 chars]",
  //     url: "https://www.lokmattimes.com/cricket/news/arshdeep-watches-uae-batters-practice-their-strokes-ahead-of-asia-cup-opener/",
  //     image:
  //       "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/686x514/ANI-20250909173546_202509.jpg",
  //     publishedAt: "2025-09-09T17:35:55Z",
  //     lang: "en",
  //     source: {
  //       id: "f2ddccedc9e60d844e7a1045928cad48",
  //       name: "Lokmat Times",
  //       url: "https://www.lokmattimes.com",
  //       country: "in",
  //     },
  //   },
  // ];
  const capitalizeFirstLetter = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };
  // document.title = `${capitalizeFirstLetter(
  //       props.category
  //     )}-NewsMonkey`;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  

  const Updated = async () => {
    // let url = `https://gnews.io/api/v4/search?q=cricket&lang=en&page=1&apikey=e5e42a87004c15f193c11a2913401b9b----de0bbb9ac1928639e69d467f8d586f1a---&max=${props.pagesize}`;
    // setState({ loading: true });
    props.setProgress(10);
    let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&page=${page}&country=india&max=10&apikey=e5e42a87004c15f193c11a2913401b9b&max=${props.pagesize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(70);
    let parsedData = await data.json();
    props.setProgress(80);
    //setState({ loading: false });
    //console.log(parsedData);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    

    props.setProgress(100);
  };
  useEffect(() => {
    Updated();
    // eslint-disable-next-line
  }, []);
  const handlenextclick = async () => {
  setPage(page + 1);
  Updated();  // pass value directly
};
  const handlepreviousclick = async () => {
    setPage(page - 1);
    Updated();
  };
  const fetchMoreData = async () => {
    setPage(page + 1);
    props.setProgress(10);
    let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&page=${page}&country=india&max=10&apikey=e5e42a87004c15f193c11a2913401b9b&max=${props.pagesize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(70);
    let parsedData = await data.json();
    props.setProgress(80);
    //setState({ loading: false });
    //console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    

    props.setProgress(100);
  };

  return (
    <div>
      <>
        <h2 className="text-center" style={{ margin: "30px" }}>
          News Monkey-Top {capitalizeFirstLetter(props.category)}
          HeadLines
        </h2>
        {loading}
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading />}
        >
          <div className="Container">
            <div className="row ">
              {articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      Description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      Imageurl={
                        element.image
                          ? element.image
                          : "https://www.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg"
                      }
                      date={element.publishedAt}
                      newsUrl={element.url}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          disabled={page <= 1}
          className="btn btn-dark "
          onClick={handlepreviousclick}
        >
          {" "}
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlenextclick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Loading from "./Loading";
// import InfiniteScroll from "react-infinite-scroll-component";

// export default class Pages extends Component {
//   // articles = [
//   //   {
//   //     id: "32b034b47ca850e54999ff5754e87fb1",
//   //     title: "Afghanistan crush Hong Kong by 94 runs in Asia Cup opener",
//   //     description:
//   //       "Sediqullah Atal scored 73 as Afghanistan defeated Hong Kong by 94 runs in the AFC Asia Cup in Abu Dhabi on Tuesday..AFC Asia Cup, Afghanistan cricket, Hong Kong cricket, cricket scores, Afghanistan vs Hong Kong, Sediqullah Atal, Azmatullah, Fazalhaq Farooqi, Rashid Khan, Group B AFC Asia Cup, cricket match results, Asia Cup 2024, India cricket team, Suryakumar Yadav, cricket news",
//   //     content:
//   //       "Afghanistan crushed Hong Kong by 94 runs in the opening match of the AFC Asia Cup in Abu Dhabi on Tuesday.\nChasing a target of 189, Hong Kong were restricted to 94/9. Babar Hayat top-scored with 39 runs, while Fazalhaq Farooqi bagged 2/16 and Gulbadi... [544 chars]",
//   //     url: "https://www.onmanorama.com/sports/cricket/2025/09/09/afc-asia-cup-afghanistan-vs-hong-kong.html",
//   //     image:
//   //       "https://img.onmanorama.com/content/dam/mm/en/archive/sports/cricket/images/2025/9/9/afghanistan-vs-hong-kong-asia-cup.jpg",
//   //     publishedAt: "2025-09-09T18:31:28Z",
//   //     lang: "en",
//   //     source: {
//   //       id: "60c457b35b486691319f105c3a760060",
//   //       name: "Malayala Manorama",
//   //       url: "https://www.onmanorama.com",
//   //       country: "in",
//   //     },
//   //   },

//   //   {
//   //     id: "a9e558527dc2ea4563e1a2054c32c6d1",
//   //     title: "Abhishek Sharma: India's New Ace in T20 Cricket",
//   //     description:
//   //       "Indian cricketer Abhishek Sharma has emerged as a standout T20 performer since October 2023, amassing 2,332 runs in 66 matches with a striking average of 36.43 and a strike rate of 198.29. The Yuvraj Singh-mentored player showcases a powerful batting style, making significant contributions in major tournaments including the IPL and Syed Mushtaq Ali Trophy.",
//   //     content:
//   //       "Indian cricket sensation Abhishek Sharma enters the Asia Cup with compelling credentials. Since October 2023, Sharma has accumulated an impressive 2,332 runs in the T20 format, leading with the highest strike rate for Indian batsmen. His prowess was ... [838 chars]",
//   //     url: "https://www.devdiscourse.com/article/sports-games/3621661-abhishek-sharma-indias-new-ace-in-t20-cricket",
//   //     image:
//   //       "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/09_09_2025_23_35_36_7915104.jpg?width=920&format=jpeg",
//   //     publishedAt: "2025-09-09T18:06:06Z",
//   //     lang: "en",
//   //     source: {
//   //       id: "c6a01ba91c1a2bc3f53f4707110bfee5",
//   //       name: "Devdiscourse",
//   //       url: "https://www.devdiscourse.com",
//   //       country: "in",
//   //     },
//   //   },

//   //   {
//   //     id: "b8789ee0006c2c77d200bdd1079dc570",
//   //     title:
//   //       "India Asia Cup 2025 Full Schedule: LIVE Streaming, Fixtures, Squad, Venues, IND vs PAK Match Details and All You Need to Know",
//   //     description:
//   //       "India Asia Cup 2025 Full Schedule: LIVE Streaming, Fixtures, Squad, Venues, IND vs PAK Match Details and All You Need to Know - Indian National Cricket Team Asia Cup 2025 Schedule: Reigning champions India will begin their Asia Cup 2025 journey against hosts ... Find Latest cricket articles and live match coverage on www.lokmattimes.com",
//   //     content:
//   //       "Indian National Cricket Team Asia Cup 2025 Schedule: Reigning champions India will begin their Asia Cup 2025 journey against hosts United Arab Emirates at the Dubai International Cricket Stadium on September 10. Led by Suryakumar Yadav, India aim to ... [1665 chars]",
//   //     url: "https://www.lokmattimes.com/cricket/news/india-asia-cup-2025-full-schedule-live-streaming-fixtures-squad-venues-ind-vs-pak-match-details-and-all-you-need-to-know-a507/",
//   //     image:
//   //       "https://d3pc1xvrcw35tl.cloudfront.net/ln/images/686x514/india-asia-cup-2025-full-schedule_202509998032.jpg",
//   //     publishedAt: "2025-09-09T17:45:55Z",
//   //     lang: "en",
//   //     source: {
//   //       id: "f2ddccedc9e60d844e7a1045928cad48",
//   //       name: "Lokmat Times",
//   //       url: "https://www.lokmattimes.com",
//   //       country: "in",
//   //     },
//   //   },
//   //   {
//   //     id: "d6e8429cfedb343f8d065d3fef4f946f",
//   //     title:
//   //       "New Record! Afghanistan all-rounder Azmatullah Omarzai creates history, becomes fastest batter to...",
//   //     description:
//   //       "Cricket News: Azmatullah Omarzai's explosive fifty off just 20 balls propelled Afghanistan to a formidable total against Hong Kong in their Asia Cup opener. Omarzai",
//   //     content:
//   //       "Azmatullah Omarzai's explosive fifty off just 20 balls propelled Afghanistan to a formidable total against Hong Kong in their Asia Cup opener. Omarzai's record-breaking innings, surpassing Mohammad Nabi's previous best, helped Afghanistan score 78 ru... [1801 chars]",
//   //     url: "https://timesofindia.indiatimes.com/sports/cricket/asia-cup/new-record-afghanistan-all-rounder-azmatullah-omarzai-creates-history-becomes-fastest-batter-to-/articleshow/123791729.cms",
//   //     image:
//   //       "https://static.toiimg.com/thumb/msid-123791917,width-1070,height-580,imgsize-201890,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//   //     publishedAt: "2025-09-09T17:44:00Z",
//   //     lang: "en",
//   //     source: {
//   //       id: "9a9a0fb79c70bbf499d39baca94921ae",
//   //       name: "Times of India",
//   //       url: "https://timesofindia.indiatimes.com",
//   //       country: "in",
//   //     },
//   //   },
//   //   {
//   //     id: "c8b32aad1a902cde6938530591478b8d",
//   //     title:
//   //       "Asia Cup 2025: 'This is not a curtain raiser, it's only a curtain' - R Ashwin slams lack of competition against India",
//   //     description:
//   //       "Cricket News: Ravichandran Ashwin has criticised the Asia Cup 2025, questioning the competitiveness for Team India. He suggested the inclusion of India A or a combi",
//   //     content:
//   //       "Ravichandran Ashwin has criticised the Asia Cup 2025, questioning the competitiveness for Team India. He suggested the inclusion of India A or a combined Afro-Asia team to create a real challenge. Ashwin doubted other teams could compete with India's... [2292 chars]",
//   //     url: "https://timesofindia.indiatimes.com/sports/cricket/asia-cup/asia-cup-2025-this-is-not-a-curtain-raiser-its-only-a-curtain-r-ashwin-slams-lack-of-competition-against-india/articleshow/123791717.cms",
//   //     image:
//   //       "https://static.toiimg.com/thumb/msid-123791776,width-1070,height-580,imgsize-64064,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//   //     publishedAt: "2025-09-09T17:36:00Z",
//   //     lang: "en",
//   //     source: {
//   //       id: "9a9a0fb79c70bbf499d39baca94921ae",
//   //       name: "Times of India",
//   //       url: "https://timesofindia.indiatimes.com",
//   //       country: "in",
//   //     },
//   //   },
//   //   {
//   //     id: "03dbafad85806771cb65027d59878ebd",
//   //     title:
//   //       "Arshdeep watches UAE batters practice their strokes ahead of Asia Cup opener",
//   //     description:
//   //       "Arshdeep watches UAE batters practice their strokes ahead of Asia Cup opener - Dubai [UAE], September 9 : Indian left-armer Arshdeep Singh saw UAE batters practising out in nets ahead of their ... Find Latest cricket articles and live match coverage on www.lokmattimes.com",
//   //     content:
//   //       "Dubai [UAE], September 9 : Indian left-armer Arshdeep Singh saw UAE batters practising out in nets ahead of their Asia Cup campaign opener in Dubai on Wednesday.\nTeam India, the 2023 50-over Asia Cup winners, will be aiming to add another T20 Asia Cu... [1617 chars]",
//   //     url: "https://www.lokmattimes.com/cricket/news/arshdeep-watches-uae-batters-practice-their-strokes-ahead-of-asia-cup-opener/",
//   //     image:
//   //       "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/686x514/ANI-20250909173546_202509.jpg",
//   //     publishedAt: "2025-09-09T17:35:55Z",
//   //     lang: "en",
//   //     source: {
//   //       id: "f2ddccedc9e60d844e7a1045928cad48",
//   //       name: "Lokmat Times",
//   //       url: "https://www.lokmattimes.com",
//   //       country: "in",
//   //     },
//   //   },
//   // ];
//   capitalizeFirstLetter = (String) => {
//     return String.charAt(0).toUpperCase() + String.slice(1);
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       error: null,
//       loading: false,
//       totalResults: 0,
//       page: 1,
      
//     };
//     document.title = `${this.capitalizeFirstLetter(
//       this.props.category
//     )}-NewsMonkey`;
//   }
//   async Updated() {
//     // let url = `https://gnews.io/api/v4/search?q=cricket&lang=en&page=1&apikey=e5e42a87004c15f193c11a2913401b9b----de0bbb9ac1928639e69d467f8d586f1a---&max=${this.props.pagesize}`;
//     // this.setState({ loading: true });
//     this.props.setProgress(10);
//     let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=us&max=10&apikey=e5e42a87004c15f193c11a2913401b9b&max=${this.props.pagesize}`;
//     this.setState({ loading: true });
//     this.props.setProgress(30);
//     let data = await fetch(url);
//     this.props.setProgress(70);
//     let parsedData = await data.json();
//     this.props.setProgress(80);
//     //this.setState({ loading: false });
//     //console.log(parsedData);

//     this.setState({
//       articles: parsedData.articles,
//       loading: false,
//       totalResults: parsedData.totalResults,
//     });
//      this.props.setProgress(100);
    
//   }
//   async componentDidMount() {
//     this.Updated();
//   }
//   handlenextclick = async () => {
//     this.setState({ page: this.state.page + 1 });
//     this.Updated();
//   };
//   handlepreviousclick = async () => {
//     this.setState({ page: this.state.page - 1 });
//     this.Updated();
//   };
//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     let url = `https://gnews.io/api/v4/top-headlines?category=${
//       this.props.category
//     }&lang=en&country=us&max=10&apikey=e5e42a87004c15f193c11a2913401b9b&max=${
//       this.props.pagesize
//     }&page=${this.state.page + 1}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();

//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <>
//           <h2 className="text-center" style={{ margin: "30px" }}>
//             News Monkey-Top {this.capitalizeFirstLetter(this.props.category)}
//             HeadLines
//           </h2>
//           {this.state.loading}
//           <InfiniteScroll
//             dataLength={this.state.articles.length} //This is important field to render the next data
//             next={this.fetchMoreData}
//             hasMore={this.state.articles.length !== this.totalResults}
//             loader={<Loading />}
//           >
//             <div className="Container">
//               <div className="row ">
//                 {this.state.articles.map((element) => {
//                   return (
//                     <div className="col-md-3" key={element.url}>
//                       <NewsItem
//                         title={element.title ? element.title.slice(0, 45) : ""}
//                         Description={
//                           element.description
//                             ? element.description.slice(0, 88)
//                             : ""
//                         }
//                         Imageurl={
//                           element.image
//                             ? element.image
//                             : "https://www.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg"
//                         }
//                         date={element.publishedAt}
//                         newsUrl={element.url}
//                         source={element.source.name}
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </InfiniteScroll>
//         </>
//         <div className="container d-flex justify-content-between">
//           <button
//             type="button"
//             disabled={this.state.page <= 1}
//             className="btn btn-dark "
//             onClick={this.handlepreviousclick}
//           >
//             {" "}
//             &larr; Previous
//           </button>
//           <button
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handlenextclick}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }