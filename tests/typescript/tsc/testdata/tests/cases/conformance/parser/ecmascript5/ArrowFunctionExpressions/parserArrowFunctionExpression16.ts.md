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
          "value": true,
          "raw": "true",
          "start": 0,
          "end": 4
        },
        "consequent": {
          "type": "ConditionalExpression",
          "test": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 7,
            "end": 12
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
                "start": 16,
                "end": 21
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "param",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 39
            },
            "id": null,
            "generator": false,
            "start": 15,
            "end": 39
          },
          "alternate": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 42,
            "end": 46
          },
          "start": 7,
          "end": 46
        },
        "alternate": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 49,
          "end": 53
        },
        "start": 0,
        "end": 53
      },
      "directive": null,
      "start": 0,
      "end": 53
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Boolean",
    "value": "true",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5,
    "end": 6
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 31,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Null",
    "value": "null",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Null",
    "value": "null",
    "start": 49,
    "end": 53
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
          "value": true,
          "raw": "true",
          "start": 0,
          "end": 4
        },
        "consequent": {
          "type": "ConditionalExpression",
          "test": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 7,
            "end": 12
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
                "start": 16,
                "end": 21
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "param",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 39
            },
            "id": null,
            "generator": false,
            "start": 15,
            "end": 39
          },
          "alternate": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 42,
            "end": 46
          },
          "start": 7,
          "end": 46
        },
        "alternate": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 49,
          "end": 53
        },
        "start": 0,
        "end": 53
      },
      "directive": null,
      "start": 0,
      "end": 53
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Boolean",
    "value": "true",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5,
    "end": 6
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 31,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Null",
    "value": "null",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Null",
    "value": "null",
    "start": 49,
    "end": 53
  }
]
```
