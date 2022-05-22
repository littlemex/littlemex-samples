/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-shadow */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import React from 'react';
import './App.css';

function App() {
  const name = 'Patty';

  const greet = (n: string) => (
    <p>
      Hello,
      {n || 'Guest'}
    </p>
  );
  const n = Math.floor(Math.random() * 10);
  const threshold = 5;
  const list = ['Patty', 'Rolley', 'Bobby'];
  const loop = (l: string[]) =>
    l.map((n) => (
      <li>
        Hello,
        {n}!
      </li>
    ));

  type Props = { name: string; times?: number };
  // Greetsという関数コンポーネントを定義する、自作コンポーネントは必ず大文字で始める
  const Greets: React.FunctionComponent<Props> = (props) => {
    const { name, times = 1, children } = props;

    return (
      <>
        {[...Array(times)].map((_) => (
          <p>
            Hello,
            {name}!{children}
          </p>
        ))}
      </>
    );
  };

  return (
    // フラグメント<></>を利用して複数の要素を無駄なノード階層を作らずに扱える
    // jsxはReactElement Objectを生成するためのシンタックスシュガー、ゆえに全てHTMLに見えていても実際はjs
    <>
      {/* jsの予約語classとかぶってしまうため、classNameとなっている */}
      <div className="App">
        <div>{greet(name)}</div>
        {/* jsxは式しかかけないのでif文の代わりにショートサーキットと三項演算子で実現する. boolは出力には影響されないことを利用 */}
        {n}
        {n > threshold && (
          <p>
            n is larger than
            {threshold}
          </p>
        )}
        <p>
          n is
          {n % 2 === 0 ? 'even' : 'odd'}
        </p>
        {/* for文は使えないのでmapなどを使う */}
        {loop(list)}
        <Greets name="Patty" times={4}>
          {/* L16: childrenに相当 */}
          {/* aria-*とdata-*だけはケバブケースが適用される */}
          <span role="img" aria-label="rabbit">
            rabbit
          </span>
        </Greets>
        {/* checked, disabled, selectedなどはbook型になる */}
        <input type="checkbox" checked />
      </div>
      <div className="App2">hoge</div>

      <form action="">
        <textarea name="" id="" value="Fixed Text" />
        <select name="" id="" value="uranus">
          <option value="saturn">Saturn</option>
          <option value="uranus">Uranus</option>
        </select>
      </form>
    </>
  );
}

export default App;
