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
          "type": "ConditionalExpression",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "consequent": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "alternate": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 14
          },
          "start": 4,
          "end": 15
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 24
          },
          "id": null,
          "generator": false,
          "start": 18,
          "end": 24
        },
        "start": 0,
        "end": 24
      },
      "directive": null,
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 37
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
    "value": "?",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 13,
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
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 20,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 23,
    "end": 24
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
          "type": "ConditionalExpression",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "consequent": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "alternate": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 14
          },
          "start": 4,
          "end": 15
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 24
          },
          "id": null,
          "generator": false,
          "start": 18,
          "end": 24
        },
        "start": 0,
        "end": 24
      },
      "directive": null,
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 24
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
    "value": "?",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 13,
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
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 20,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 23,
    "end": 24
  }
]
```
