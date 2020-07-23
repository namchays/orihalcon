import React, { Component }  from 'react';
import ProductIntrodution from './Components/ProductIntrodution'
import './App.css';
import Footer from './Components/Footer'
import Header from './Components/Header';
import Technology from './Components/Technology'
import ProductDetail from './Components/ProductDetail';
import News from './Components/News';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Gallery from './Components/Gallery';
import TechnologyDetails from './Components/TechnologyDetails';
import GalleryDetails from './Components/GalleryDetails';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product:[
        {
         id : 1,
         name : 'Amateras Dome Player',
         jpName: 'アマテラスドームプレイヤー',
         content :'ドーム映像プレーヤーのデファクトスタンダード。ドーム映像のために設計された、最高の使いやすさと多彩な機能を誇るソフトウェアです。ドームシアターでの高解像度映像再生はもちろん、同じ使い勝手をフリー版で提供することにより、「誰もが使いこなせるドームシアター」を実現します。',
         img :'assets/img/portfolio/01-thumbnail.jpg',
         href : 'portfolioModal1',
         img1:'フリー版を利用したドーム映像のプレビューや試写',
         img2:'あらゆるドームシアター環境での映像投影やドームの多目的活用',
         img3:'Oculus Riftや映像変換機能を活用したドーム映像制作での活用',
         img4:''
        },
        {
         id : 2,
         name : 'Amateras Room Player',
         jpName: 'アマテラスルームプレーヤー',
         content :'複数のプロジェクターを使って普通の部屋を360度映像で満たしたいというニーズに対応した、部屋マッピングのための専用ソフトウェアです。ドーム専用のDome Playerと同様に、専用ソフトウェアならではの使い勝手と高機能性を実現しています。',
         img :'assets/img/portfolio/02-thumbnail.jpg',
         href : 'portfolioModal2',
         img1:'部屋全体に360度映像コンテンツを投影',
         img2:'壁面に沿ってPIPをインタラクティブに配置',
         img3:'俯瞰視点、展開図表示など直感的な表示スタイル',
         img4:'専用ツールで簡単に複数台のプロジェクターを調整'
        
        },
        {
         id : 3,
         name : 'Amateras Panorama Player',
         jpName: 'アマテラスパノラマプレーヤー',
         content :'Amateras Panorama Playerは、円柱形状のパノラマスクリーンに特化した高機能な映像再生ソフトウェアです。ドーム専用のDome Playerと同様に、専用ソフトウェアならではの使い勝手と高機能性を実現しています。',
         img :'assets/img/portfolio/03-thumbnail.jpg',
         href : 'portfolioModal3',
         img1:'パノラマスクリーンに360度映像コンテンツを投影',
         img2:'スクリーン面に沿ってPIPをインタラクティブに配置',
         img3:'俯瞰視点、展開図表示など直感的な表示スタイル',
         img4:'専用ツールで簡単に複数台のプロジェクターを調整'
        
        },
        {
         id : 4,
         name : 'Amateras Mapper',
         jpName: 'アマテラスマッパー',
         content :'複数台プロジェクターで任意形状の物体に投影するための投影補正データを作成し、Amateras Slicerによる映像変換やリアルタイムコンテンツ向けの組み込み用投影補正データとして書き出すためのツールです。',
         img :'assets/img/portfolio/04-thumbnail.jpg',
         href : 'portfolioModal4',
         img1:'多数のプロジェクターを使ったプロジェクションマッピング',
         img2:'特殊形状のスクリーンやマルチディスプレイ環境の投影調整',
         img3:'ゲームエンジンやメディアアートプログラム用データの書き出し',
         img4:''
        },
        {
         id : 5,
         name : 'Amateras Slicer',
         jpName: 'アマテラススライサー',
         content :'Amaterasの強力な投影補正機能を使って、静止画や動画に歪み補正やブレンディングなどの映像加工（スライスと呼びます）をかけて変換するソフトウェアです。これにより、Amateras Serverを使用せずに市販のサイネージプレーヤーなどで曲面スクリーンへの投影やマルチプロジェクションが実現できます。',
         img :'assets/img/portfolio/05-thumbnail.jpg',
         href : 'portfolioModal5',
         img1:'Amateras Mapperの投影補正データで映像を変換',
         img2:'ドームマスター・エクイレクタングラー形式の相互変換',
         img3:'正面方向の調整・色調補正・10/12bit色深度の変換に対応',
         img4:'映像素材をまとめて登録しておき、投影再調整後に一括再変換'
        },
        {
         id : 6,
         name : 'Amateras Server',
         jpName: 'アマテラスサーバー',
         content :'Amateras Dome Player/Mapperを搭載した、豊富な実績を誇る純国産の多機能メディアサーバー（映像送出PC）です。Amaterasの高度な映像補正技術をもとに、任意の入力映像やサーバー上で実行する高解像度リアルタイムコンテンツの映像を、あらゆる環境に歪みなく映し出します。常設環境のために設計された堅牢な仕様と、幅広い外部機器連携も特徴です。',
         img :'assets/img/portfolio/06-thumbnail.jpg',
         href : 'portfolioModal6',
         img1:'ドームシアターやVRシアター環境の映像システムの構築',
         img2:'仮設ドームやプロジェクションマッピング向けの機材レンタル',
         img3:'インタラクティブな大型サイネージシステムの構築',
         img4:''
        },
      ],
      News : [
        {
          id : 1,
          name: '第10回国際科学映像祭ドームフェスタを開催',
          content:'2月16日から18日まで、足立区ギャラクシティで第10回国際科学映像祭ドームフェスタが開催されます。今年もAmateras Serverを活用して、国内外から集まった30近くのドーム映像作品の上映やライブVJ、数々のプレゼンテーションが行われます。わずかながら当日券もあるとのことなので、ぜひご参加ください。',
          img: 'assets/img/about/1.jpg',
          time: '2020.02.16'

        },
        {
          id : 2,
          name: 'さっぽろ雪まつり2020で今年もAmaterasが活躍',
          content:'2月4日から11日まで開催された「さっぽろ雪まつり」で、今年も多くの雪像でAmateras Serverを使ったプロジェクションマッピングが行われました。',
          img: 'assets/img/about/2.jpg',
          time: '2020.02.12'

        },
        {
          id : 3,
          name: '恵比寿映像祭の屋外13mドームにて「ハナビリウム」上映中',
          content:'2月7日から23日まで恵比寿一帯で開催されている第12回恵比寿映像祭にて、オフサイト展示として恵比寿ガーデンプレイス センター広場に直径13mの仮設ドームシアターを構築しました。毎日（月曜日を除く）360度花火映像番組「ハナビリウム」と、花火の光をモチーフとしたインスタレーション作品を無料で上映しています。足元まで降り注ぐ満天360度の花火を、寝転がって全身で体感してみてください。 追記：おかげさ…',
          img: 'assets/img/about/3.jpg',
          time: '2020.02.07'

        },
        {
          id : 4,
          name: 'Amateras Panorama Playerをリリース',
          content:'イマーシブな映像体験施設としてドームシアターとともに需要が増えている、パノラマ型スクリーンのシアター向けソリューションAmateras Panorama Playerをリリースいたしました。付属のパノラマスクリーン専用の投影調整ツールにより、曲面スクリーンへのマルチプロジェクションを素早く構築できます。360度映像のインタラクティブな投影のみならず、スクリーン面への自由にPIP映像を配置や、プロジ…',
          img: 'assets/img/about/4.jpg',
          time: '2020.01.19'

        },
      ],
      Technology : [
        {
          id: 1,
          name: 'Calibration',
          content: ' ドーム投影やプロジェクションマッピングなど、平面ではないスクリーンにプロジェクターで映像を投影すると歪んで見えてしまいます。こうした投影像の歪みを修正して正しく見せるための変形を「歪み補正」と呼びます。複数のプロジェクターを使ってひと続きの大きな映像を投影したり、重ねて投影して映像を明るく見せたりする際にも歪み補正が必要になります。また、投影像同士が重なった部分の輝度を調整して映像全体を均一な明るさにするための補正が「ブレンディング」です。こうしたプロジェクションのための映像補正をまとめて「投影補正」と呼びます。複数のプロジェクターによる映像の投影では、環境に応じたこれらの補正を行うための「投影補正データ」を計測することが必要になります。 弊社では、現場の限られた時間や条件のなかで必要とされる技術、まさに即戦力となる投影補正調整技術を開発し、提供しています',
          img : 'assets/img/technology/1.JPG',
          jpName: '投影補正調整技術'
        },
        {
          id: 2,
          name: 'Correction',
          content: 'シアター環境に応じた投影補正データが得られると、それに基づいて様々な映像を上映できるようになります。スクリーンの形状やプロジェクターの数、モニターの数や並びといった違いは投影補正データに含まれているので、これに対応したコンテンツやアプリケーションであればシアターの違いによらず上映が可能ということになります。 この投影補正データを使って、実際にコンテンツを上映するために必要になるのが投影補正技術です。インタラクティブなアプリケーションや高解像度の動画の上映、あるいは安価な機材で安定した上映システムの構築など、コンテンツの種類やニーズによって投影補正の実現方法は異なります。 投影システムでお悩みなら、まずはご相談ください。',
          img : 'assets/img/technology/2.JPG',
          jpName: '投影補正技術'
        },
        {
          id: 3,
          name: 'System Design',
          content: '大きな映像システムの構築には、理論にもとづく投影設計、安定動作のための機材選択、必要十分なバックアップ体制、現場で起こりうる問題の予見などが必要不可欠です。弊社では豊富な現場経験によって培われた知識と自社開発製品群による柔軟な対応力で、確実な映像システムの構築をお約束いたします。',
          img : 'assets/img/technology/3.JPG',
          jpName: '映像システム設計'
        },
        {
          id: 4,
          name: 'Space/Science Visualization',
          content: '科学技術可視化（Science Visualization）とは、本物の科学研究データにもとづいて自然現象や物質の特性などを映像化する作業です。研究機関などと連携して科学データを正確にわかりやすく表現することで、広く誰でもがその本質に触れられる機会を作ります。その成果は科学館や博物館での展示や学校教育現場での活用、科学映像作品の素材や研究者の成果発表資料として利用されます。また自然法則に従った物質の振る舞いや構造は、アートとして観賞できる本当に美しい世界でもあります。弊社では長年に渡り多種多様な科学可視化アプリケーションを開発してきた経験を活かして、最新の科学技術成果の普及を担うソフトウェアの開発を続けています。',
          img : 'assets/img/technology/4.JPG',
          jpName: '宇宙映像・科学可視化'
        },
        {
          id: 5,
          name: 'Document Archives',
          content: 'ドキュメントアーカイブ',
          img : 'assets/img/technology/5.JPG',
          jpName: '発表資料や技術情報を公開しています。'
        },
      ],
      gallery: [
        {
          id: 1,
          name:'山梨県立科学館',
          img: 'assets/img/gallery/Planetarium/1.JPG',
          type:'Planetarium',
          href:'Planetarium1'
        },
        {
          id: 2,
          name:'山梨県立科学館',
          img: 'assets/img/gallery/Planetarium/2.JPG',
          type:'Planetarium',
          href:'Planetarium2'
        },
        {
          id: 3,
          name:'日立シビックセンター',
          img: 'assets/img/gallery/Planetarium/3.JPG',
          type:'Planetarium',
          href:'Planetarium3'
        },
        {
          id: 4,
          name:'日立シビックセンター',
          img: 'assets/img/gallery/Planetarium/4.JPG',
          type:'Planetarium',
          href:'Planetarium4'
        },
        {
          id: 5,
          name:'宗像ユリックス',
          img: 'assets/img/gallery/Planetarium/5.JPG',
          type:'Planetarium',
          href:'Planetarium5'
        },
        {
          id: 6,
          name:'宗像ユリックス',
          img: 'assets/img/gallery/Planetarium/6.JPG',
          type:'Planetarium',
          href:'Planetarium6'
        },
        {
          id: 7,
          name:'AHHAAサイエンスセンター',
          img: 'assets/img/gallery/Planetarium/7.JPG',
          type:'Planetarium',
          href:'Planetarium7'
        },
        {
          id: 8,
          name:'AHHAAサイエンスセンター',
          img: 'assets/img/gallery/Planetarium/8.JPG',
          type:'Planetarium',
          href:'Planetarium8'
        },
        {
          id: 9,
          name:'平塚市博物館',
          img: 'assets/img/gallery/Planetarium/9.JPG',
          type:'Planetarium',
          href:'Planetarium9'
        },
        {
          id: 10,
          name:'4D2Uドームシアター',
          img: 'assets/img/gallery/dom/1.JPG',
          type:'DomeTheater',
          href:'DomeTheater1'
        },
        {
          id: 11,
          name:'BELLA GAIA コンサート',
          img: 'assets/img/gallery/dom/2.JPG',
          type:'DomeTheater',
          href:'DomeTheater2'
        },
        {
          id: 12,
          name:'TOKYO DESIGNERS WEEK',
          img: 'assets/img/gallery/dom/3.JPG',
          type:'DomeTheater',
          href:'DomeTheater3'
        },
        {
          id: 13,
          name:'TDW ドームプレゼンテーション',
          img: 'assets/img/gallery/dom/4.JPG',
          type:'DomeTheater',
          href:'DomeTheater4'
        },
        {
          id: 14,
          name:'ドームルームへの壁紙投影',
          img: 'assets/img/gallery/dom/5.JPG',
          type:'DomeTheater',
          href:'DomeTheater5'
        },
        {
          id: 15,
          name:'恵比寿GPドームイベント',
          img: 'assets/img/gallery/dom/6.JPG',
          type:'DomeTheater',
          href:'DomeTheater6'
        },
        {
          id: 16,
          name:'芝生敷きドーム',
          img: 'assets/img/gallery/dom/7.JPG',
          type:'DomeTheater',
          href:'DomeTheater7'
        },
        {
          id: 17,
          name:'iPadでドームペインティング',
          img: 'assets/img/gallery/dom/8.JPG',
          type:'DomeTheater',
          href:'DomeTheater8'
        },
        {
          id: 18,
          name:'ニコニコ超会議でのエアドーム上映',
          img: 'assets/img/gallery/dom/9.JPG',
          type:'DomeTheater',
          href:'DomeTheater9'
        },
        {
          id: 19,
          name:'札幌ドームダイヤモンドマッピング',
          img: 'assets/img/gallery/projectMapping/1.JPG',
          type:'projectMapping',
          href:'projectMapping1'
        },
        {
          id: 20,
          name:'ビアホール天井プラネタリウム',
          img: 'assets/img/gallery/projectMapping/2.JPG',
          type:'projectMapping',
          href:'projectMapping2'
        },
        {
          id: 21,
          name:'車体模型へのマッピング',
          img: 'assets/img/gallery/projectMapping/3.JPG',
          type:'projectMapping',
          href:'projectMapping3'
        },
        {
          id: 22,
          name:'科博GreatJourney展',
          img: 'assets/img/gallery/projectMapping/4.JPG',
          type:'projectMapping',
          href:'projectMapping4'
        },
        {
          id: 23,
          name:'ダイアモンドスクリーン',
          img: 'assets/img/gallery/projectMapping/5.JPG',
          type:'projectMapping',
          href:'projectMapping5'
        },
        {
          id: 24,
          name:'DYGプロジェクションマッピング',
          img: 'assets/img/gallery/projectMapping/6.JPG',
          type:'projectMapping',
          href:'projectMapping6'
        },
        {
          id: 25,
          name:'DYGプロジェクションマッピング',
          img: 'assets/img/gallery/projectMapping/7.JPG',
          type:'projectMapping',
          href:'projectMapping7'
        },
        {
          id: 26,
          name:'お台場IllusionDome',
          img: 'assets/img/gallery/projectMapping/8.JPG',
          type:'projectMapping',
          href:'projectMapping8'
        },
        {
          id: 27,
          name:'石屋製菓ビルプロジェクション',
          img: 'assets/img/gallery/projectMapping/9.JPG',
          type:'projectMapping',
          href:'projectMapping9'
        },
       
      ]
       
    }
  }
  
  render(){
  return (
    <Router> 

      <div>

    <Header/>
    <Route path="/" exact> 
     <Technology />

  <ProductIntrodution product ={this.state.product}/>
  {/* News*/}
    <News News = {this.state.News}/>
  {/* Team*/}
    <Gallery/>
  {/* Clients*/}
  <div className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt ="" /></a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#home"><img className="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
 
   <Footer/>
 

    <ProductDetail product = {this.state.product}/>
    </Route>
  </div>

    <Route path = "/gallery" exact>
      <GalleryDetails gallery ={this.state.gallery} />
    </Route>
    <Route path = "/technology" >
    <TechnologyDetails Technology ={this.state.Technology } exact/>
    </Route>
    </Router>
  );
  }
}
