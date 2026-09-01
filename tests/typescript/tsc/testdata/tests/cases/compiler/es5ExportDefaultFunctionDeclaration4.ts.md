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
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 85
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
                    "start": 96,
                    "end": 100
                  },
                  "typeArguments": null,
                  "start": 89,
                  "end": 100
                },
                "start": 87,
                "end": 100
              },
              "body": null,
              "expression": false,
              "start": 72,
              "end": 101
            },
            "exportKind": "value",
            "start": 57,
            "end": 101
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
                        "start": 125,
                        "end": 129
                      },
                      "typeArguments": null,
                      "start": 118,
                      "end": 129
                    },
                    "start": 116,
                    "end": 129
                  },
                  "start": 111,
                  "end": 129
                },
                "init": null,
                "definite": false,
                "start": 111,
                "end": 129
              }
            ],
            "declare": false,
            "start": 107,
            "end": 130
          }
        ],
        "start": 21,
        "end": 132
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 132
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 132
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
    "value": "default",
    "start": 64,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 72,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 89,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 107,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "after",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 118,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  }
]
```
