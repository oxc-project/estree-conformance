__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label1",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 6
      },
      "body": {
        "type": "ForStatement",
        "init": {
          "type": "VariableDeclaration",
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 17
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 20,
                "end": 21
              },
              "definite": false,
              "start": 16,
              "end": 21
            }
          ],
          "declare": false,
          "start": 12,
          "end": 21
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 24
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 27,
            "end": 28
          },
          "start": 23,
          "end": 28
        },
        "update": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "start": 30,
          "end": 33
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label1",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 56
              },
              "start": 41,
              "end": 57
            }
          ],
          "start": 35,
          "end": 59
        },
        "start": 8,
        "end": 59
      },
      "start": 0,
      "end": 59
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "label1",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 8,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 41,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "label1",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  }
]
```
