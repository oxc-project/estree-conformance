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
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 5,
              "end": 6
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "id": null,
          "generator": false,
          "start": 4,
          "end": 14
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
              "start": 16,
              "end": 17
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "id": null,
          "generator": false,
          "start": 16,
          "end": 22
        },
        "start": 0,
        "end": 22
      },
      "directive": null,
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 35
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
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "=>",
    "start": 8,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 18,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 21,
    "end": 22
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
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 5,
              "end": 6
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "id": null,
          "generator": false,
          "start": 4,
          "end": 14
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
              "start": 16,
              "end": 17
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "id": null,
          "generator": false,
          "start": 16,
          "end": 22
        },
        "start": 0,
        "end": 22
      },
      "directive": null,
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 22
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
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "=>",
    "start": 8,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 18,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 21,
    "end": 22
  }
]
```
