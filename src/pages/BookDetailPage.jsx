// src/pages/BookDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';

const books = [
  {
    id: '1',
    title: '핵심 미적분학',
    author: '최서진',
    publisher: '북북출판',
    publishDate: '2024.05.01',
    price: 19800,
    image: '/book1.jpg',
    category: '프론트엔드 / 웹개발',
    orderDate: '2025-05-01',
    rentStartDate: '2025-05-02',
    rentDueDate: '2025-05-16',
    status: '연체중',
    deliveryMethod: '사물함',
    overdueDays: 3,
    paymentMethod: '카카오페이',
  },
];

function BookDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === id);

  if (!book) return <div>책 정보를 찾을 수 없습니다.</div>;

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
      <Header />
      <div style={cardWrapper}>
        <div style={imageBox}>
          <img src={book.image} alt="book" style={imageStyle} />
        </div>
        <div style={infoBox}>
          <h2 style={{ marginBottom: '16px' }}>📘 주문 상세 정보</h2>
          <div style={twoColGrid}>
            <span><strong>제목:</strong> {book.title}</span>
            <span><strong>저자:</strong> {book.author}</span>
            <span><strong>출판사:</strong> {book.publisher}</span>
            <span><strong>출판일:</strong> {book.publishDate}</span>
            <span><strong>카테고리:</strong> {book.category}</span>
            <span><strong>주문일자:</strong> {book.orderDate}</span>
            <span><strong>대여기간:</strong> {book.rentStartDate} ~ {book.rentDueDate}</span>
            <span><strong>대여 상태:</strong> {book.status}</span>
            <span><strong>수령 방식:</strong> {book.deliveryMethod}</span>
            {book.status === '연체중' && (
              <span><strong>연체 일수:</strong> {book.overdueDays}일</span>
            )}
            <span><strong>대여 금액:</strong> {book.price.toLocaleString()}원</span>
            <span><strong>결제 수단:</strong> {book.paymentMethod}</span>
            <span><strong>주문 번호:</strong> {book.id}</span>
          </div>
          <button onClick={() => navigate(-1)} style={backButton}>← 목록으로 돌아가기</button>
        </div>
      </div>
    </div>
  );
}

const cardWrapper = {
  display: 'flex',
  gap: '40px',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '20px'
};

const imageBox = {
  width: '240px',
  height: '320px',
  backgroundColor: '#ddd',
  borderRadius: '10px',
  overflow: 'hidden',
  flexShrink: 0
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const infoBox = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  fontSize: '16px'
};

const twoColGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  rowGap: '10px',
  columnGap: '40px',
  marginBottom: '20px'
};

const backButton = {
  padding: '10px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  alignSelf: 'flex-start'
};

export default BookDetailPage;




