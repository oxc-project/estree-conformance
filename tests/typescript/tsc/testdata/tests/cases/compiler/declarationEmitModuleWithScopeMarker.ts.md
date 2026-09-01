__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "bar",
        "raw": "\"bar\"",
        "start": 15,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "before",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 46,
                        "end": 50
                      },
                      "typeArguments": null,
                      "start": 39,
                      "end": 50
                    },
                    "start": 37,
                    "end": 50
                  },
                  "start": 31,
                  "end": 50
                },
                "init": null,
                "definite": false,
                "start": 31,
                "end": 50
              }
            ],
            "declare": false,
            "start": 27,
            "end": 51
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "normal",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 79
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 83,
                  "end": 87
                },
                "start": 81,
                "end": 87
              },
              "body": null,
              "expression": false,
              "start": 64,
              "end": 88
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 57,
            "end": 88
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 122
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 137
                  },
                  "typeArguments": null,
                  "start": 126,
                  "end": 137
                },
                "start": 124,
                "end": 137
              },
              "body": null,
              "expression": false,
              "start": 109,
              "end": 138
            },
            "exportKind": "value",
            "start": 94,
            "end": 138
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
                  "name": "after",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 166
                      },
                      "typeArguments": null,
                      "start": 155,
                      "end": 166
                    },
                    "start": 153,
                    "end": 166
                  },
                  "start": 148,
                  "end": 166
                },
                "init": null,
                "definite": false,
                "start": 148,
                "end": 166
              }
            ],
            "declare": false,
            "start": 144,
            "end": 167
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 173,
            "end": 182
          }
        ],
        "start": 21,
        "end": 184
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
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
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "before",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 39,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "normal",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 94,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 101,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 109,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "after",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 155,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  }
]
```
