__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 5
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "init": null,
          "definite": false,
          "start": 7,
          "end": 8
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 10,
            "end": 11
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 14,
            "end": 15
          },
          "definite": false,
          "start": 10,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 23
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 26,
            "end": 27
          },
          "definite": false,
          "start": 21,
          "end": 27
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 31
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 34,
            "end": 35
          },
          "definite": false,
          "start": 29,
          "end": 35
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 39
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 42,
            "end": 43
          },
          "definite": false,
          "start": 37,
          "end": 43
        }
      ],
      "declare": false,
      "start": 17,
      "end": 44
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 17,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 29,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  }
]
```
