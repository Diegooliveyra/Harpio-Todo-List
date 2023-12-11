import React, { useState } from 'react';

import * as S from './styles';

interface PaginationPros {
  totalPage: number;

  actualPage: number;
  setNumberPage: any;
}

const Pagination = ({
  actualPage,
  totalPage,
  setNumberPage,
}: PaginationPros) => {
  const [selectedElement, setSelectedElement] = useState<number>(actualPage);
  const [pages, setPages] = useState<number[]>([]);

  React.useEffect(() => {
    const page = [];
    if (totalPage <= 5) {
      for (let n = 1; n <= totalPage; n++) {
        page.push(n);
      }
      setPages(page);
    } else {
      const downlimit = selectedElement - 5 < 1 ? 1 : selectedElement - 5;
      const uplimit =
        selectedElement + 5 < totalPage ? selectedElement + 5 : totalPage;
      for (let n = downlimit; n <= uplimit; n++) {
        page.push(n);
      }
      setPages(page);
    }
  }, [selectedElement, totalPage]);

  React.useEffect(() => {
    setSelectedElement(actualPage);
  }, [actualPage]);

  function next(number: number) {
    setNumberPage(number);
    setSelectedElement(number);
  }

  function prev(number: number) {
    setNumberPage(number);
    setSelectedElement(number);
  }

  return (
    <S.Wrapper>
      <S.Pagination>
        <div className="prev">
          <span
            onClick={() => prev(selectedElement <= 0 ? 0 : selectedElement - 1)}
          >
            Preview
          </span>
        </div>

        <S.Buttons>
          {pages.map((page, index) => (
            <button
              key={index}
              className={page === selectedElement ? 'actived' : ''}
              onClick={() => (setSelectedElement(page), setNumberPage(page))}
            >
              {page}
            </button>
          ))}
        </S.Buttons>

        <div className="next">
          <span
            onClick={() =>
              next(
                selectedElement >= pages.length - 1
                  ? totalPage - 1
                  : selectedElement + 1
              )
            }
          >
            Next
          </span>
        </div>
      </S.Pagination>
    </S.Wrapper>
  );
};

export default Pagination;
