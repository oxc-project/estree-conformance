__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "directive": null,
          "start": 6,
          "end": 9
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
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 20,
                "end": 22
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 25,
                "end": 26
              },
              "definite": false,
              "start": 20,
              "end": 26
            }
          ],
          "declare": false,
          "start": 14,
          "end": 27
        }
      ],
      "start": 0,
      "end": 29
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 37
        }
      ],
      "declare": false,
      "start": 31,
      "end": 38
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 47
          },
          "directive": null,
          "start": 45,
          "end": 48
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
                "name": "v1",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 61
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 64,
                "end": 65
              },
              "definite": false,
              "start": 59,
              "end": 65
            }
          ],
          "declare": false,
          "start": 53,
          "end": 66
        }
      ],
      "start": 39,
      "end": 68
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 68
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 14,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 20,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  }
]
```
