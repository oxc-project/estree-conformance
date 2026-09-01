__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z7",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 11,
            "end": 16
          },
          "definite": false,
          "start": 6,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "start": 24,
            "end": 34
          },
          "init": {
            "type": "Literal",
            "value": 23,
            "raw": "23",
            "start": 37,
            "end": 39
          },
          "definite": false,
          "start": 24,
          "end": 39
        }
      ],
      "declare": false,
      "start": 18,
      "end": 40
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z9",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 49
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 52,
            "end": 53
          },
          "definite": false,
          "start": 47,
          "end": 53
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 60,
                "end": 66
              },
              "start": 59,
              "end": 66
            },
            "start": 55,
            "end": 66
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 69,
            "end": 71
          },
          "definite": false,
          "start": 55,
          "end": 71
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z11",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 76
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 79,
            "end": 83
          },
          "definite": false,
          "start": 73,
          "end": 83
        }
      ],
      "declare": false,
      "start": 41,
      "end": 84
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 84
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "z7",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 11,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 18,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "z8",
    "start": 24,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "23",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "z9",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "z10",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "z11",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Null",
    "value": "null",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  }
]
```
