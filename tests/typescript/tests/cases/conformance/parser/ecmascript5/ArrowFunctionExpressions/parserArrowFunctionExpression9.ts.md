__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 1
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 5,
          "end": 6
        },
        "alternate": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "id": null,
          "generator": false,
          "start": 10,
          "end": 16
        },
        "start": 0,
        "end": 16
      },
      "directive": null,
      "start": 0,
      "end": 16
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "b",
    "start": 0,
    "end": 1
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 12,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 15,
    "end": 16
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 1
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 5,
          "end": 6
        },
        "alternate": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "id": null,
          "generator": false,
          "start": 10,
          "end": 16
        },
        "start": 0,
        "end": 16
      },
      "directive": null,
      "start": 0,
      "end": 16
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 16
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "b",
    "start": 0,
    "end": 1
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 12,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 15,
    "end": 16
  }
]
```
