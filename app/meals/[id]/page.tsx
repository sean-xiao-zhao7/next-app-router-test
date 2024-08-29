export default function MealDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    return (
        <>
            <h1>Meal # {params.id}</h1>
        </>
    );
}
