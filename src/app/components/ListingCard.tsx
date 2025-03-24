import styles from './ListingCard.module.css';

interface ListingCardProps {
  imageUrl: string;
  title: string;
  endDate: string;
  price: number;
}

export default function ListingCard({ imageUrl, title, endDate, price }: ListingCardProps) {
  return (
    <div className={styles['listing-card']}>
      <div className={styles['listing-image']}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles['listing-info']}>
        <h2>{title}</h2>
        <p className={styles['end-date']}>Ends: {endDate}</p>
        <p className={styles.price}>${price.toLocaleString()}</p>
      </div>
    </div>
  );
} 