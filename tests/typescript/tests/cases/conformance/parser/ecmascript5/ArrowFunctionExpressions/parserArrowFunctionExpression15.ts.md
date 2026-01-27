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
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 0,
          "end": 5
        },
        "consequent": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "param",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 14
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 17,
              "end": 23
            },
            "start": 15,
            "end": 23
          },
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 32
          },
          "id": null,
          "generator": false,
          "start": 8,
          "end": 32
        },
        "alternate": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 35,
          "end": 39
        },
        "start": 0,
        "end": 39
      },
      "directive": null,
      "start": 0,
      "end": 39
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 94
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Boolean",
    "value": "false",
    "start": 0,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "param",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 24,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 27,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Null",
    "value": "null",
    "start": 35,
    "end": 39
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
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 0,
          "end": 5
        },
        "consequent": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "param",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 14
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 17,
              "end": 23
            },
            "start": 15,
            "end": 23
          },
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 32
          },
          "id": null,
          "generator": false,
          "start": 8,
          "end": 32
        },
        "alternate": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 35,
          "end": 39
        },
        "start": 0,
        "end": 39
      },
      "directive": null,
      "start": 0,
      "end": 39
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 39
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Boolean",
    "value": "false",
    "start": 0,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "param",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 24,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 27,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Null",
    "value": "null",
    "start": 35,
    "end": 39
  }
]
```
