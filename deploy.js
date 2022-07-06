async function main() {
    // do things
    throw new Error('some error');
}

main()
    .then(() => process.exit(0))
    .catch(() => {
        console.log('error in catch');
        process.exit(1)
    })