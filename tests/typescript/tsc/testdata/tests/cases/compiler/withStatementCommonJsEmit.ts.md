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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 19,
                "end": 25
              },
              "start": 17,
              "end": 25
            },
            "start": 14,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 25
        }
      ],
      "declare": true,
      "start": 0,
      "end": 26
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 37
      },
      "body": {
        "type": "ExportNamedDeclaration",
        "declaration": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 51
              },
              "init": null,
              "definite": false,
              "start": 50,
              "end": 51
            }
          ],
          "declare": false,
          "start": 46,
          "end": 52
        },
        "specifiers": [],
        "source": null,
        "exportKind": "value",
        "attributes": [],
        "start": 39,
        "end": 52
      },
      "start": 28,
      "end": 52
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 62
      },
      "body": {
        "type": "ExportNamedDeclaration",
        "declaration": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 76
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 79,
                "end": 80
              },
              "definite": false,
              "start": 75,
              "end": 80
            }
          ],
          "declare": false,
          "start": 71,
          "end": 81
        },
        "specifiers": [],
        "source": null,
        "exportKind": "value",
        "attributes": [],
        "start": 64,
        "end": 81
      },
      "start": 53,
      "end": 81
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 91
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "local",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 102
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 105,
              "end": 106
            },
            "definite": false,
            "start": 97,
            "end": 106
          }
        ],
        "declare": false,
        "start": 93,
        "end": 107
      },
      "start": 82,
      "end": 107
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 117
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 137
                  },
                  "init": null,
                  "definite": false,
                  "start": 136,
                  "end": 137
                }
              ],
              "declare": false,
              "start": 132,
              "end": 138
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 125,
            "end": 138
          }
        ],
        "start": 119,
        "end": 140
      },
      "start": 108,
      "end": 140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 39,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 53,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 64,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 71,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 93,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "local",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 125,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  }
]
```
