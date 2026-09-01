__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 4,
        "end": 5
      },
      "consequent": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 23
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 24,
          "end": 27
        },
        "const": true,
        "declare": false,
        "start": 11,
        "end": 27
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 37,
          "end": 38
        },
        "consequent": {
          "type": "TSEnumDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "body": {
            "type": "TSEnumBody",
            "members": [],
            "start": 57,
            "end": 60
          },
          "const": true,
          "declare": false,
          "start": 44,
          "end": 60
        },
        "alternate": {
          "type": "TSEnumDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "body": {
            "type": "TSEnumBody",
            "members": [],
            "start": 83,
            "end": 86
          },
          "const": true,
          "declare": false,
          "start": 70,
          "end": 86
        },
        "start": 33,
        "end": 86
      },
      "start": 0,
      "end": 86
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 11,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 17,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 28,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 44,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 50,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 61,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 76,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  }
]
```
