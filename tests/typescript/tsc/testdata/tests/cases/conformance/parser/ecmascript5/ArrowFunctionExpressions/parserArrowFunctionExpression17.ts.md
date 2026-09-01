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
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 1
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 4,
          "end": 5
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 15
              },
              "typeArguments": null,
              "start": 14,
              "end": 15
            },
            "start": 12,
            "end": 15
          },
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 20
          },
          "id": null,
          "generator": false,
          "start": 8,
          "end": 20
        },
        "start": 0,
        "end": 20
      },
      "directive": null,
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "b",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 16,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 19,
    "end": 20
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
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 1
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 4,
          "end": 5
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 15
              },
              "typeArguments": null,
              "start": 14,
              "end": 15
            },
            "start": 12,
            "end": 15
          },
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 20
          },
          "id": null,
          "generator": false,
          "start": 8,
          "end": 20
        },
        "start": 0,
        "end": 20
      },
      "directive": null,
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 20
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "b",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 16,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 19,
    "end": 20
  }
]
```
