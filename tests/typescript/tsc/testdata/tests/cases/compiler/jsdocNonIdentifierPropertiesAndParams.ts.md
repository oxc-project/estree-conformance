__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Button",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 331
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 337
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 362
                    },
                    "start": 354,
                    "end": 362
                  }
                ],
                "start": 352,
                "end": 364
              },
              "start": 345,
              "end": 364
            }
          ],
          "start": 339,
          "end": 366
        },
        "expression": false,
        "start": 316,
        "end": 366
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 309,
      "end": 366
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 309,
  "end": 471
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 309,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 316,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 357,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  }
]
```
