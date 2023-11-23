import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const TitleMessage = styled.div<{ color: string }>`
  font-weight: bold;
  margin-bottom: 10px;
`;
export const StatusMessage = styled.div<{ color: string }>`
  color: ${(props) => (props.color === "recebido" ? "#2ecc71" : "#f39c12")};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledOrders = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ProductName = styled.div`
  font-weight: bold;
`;

export const ProductId = styled.div`
  color: #888888;
`;

export const Price = styled.div`
  color: #555555;
`;

export const Quantity = styled.div`
  margin-top: 5px;
`;
export const Button = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
