import styles from "./Blockquote.module.css";

export default function Blockquote() {
    return (
        <div className={styles.bqWrapper}>
            <blockquote className={styles.blockquote}>
                <p>
                    The redwoods, once seen, leave a mark or create a vision
                    that stays with you always.
                    <br />
                    No one has ever successfully painted or photographed a
                    redwood tree.
                    <br />
                    The feeling they produce is not transferable.
                    <br />
                    From them comes silence and awe.
                </p>
                <cite>John Steinbeck</cite>
            </blockquote>
        </div>
    );
}
