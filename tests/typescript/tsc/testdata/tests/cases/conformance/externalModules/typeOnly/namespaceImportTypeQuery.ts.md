__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 10
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "exportKind": "value",
          "start": 25,
          "end": 26
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 11,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 44
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 45,
          "end": 47
        },
        "abstract": false,
        "declare": false,
        "start": 37,
        "end": 47
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 47
    },
    {
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 11,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 37,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 23,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "types",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 49
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 51
                  },
                  "start": 44,
                  "end": 51
                },
                "typeArguments": null,
                "start": 37,
                "end": 51
              },
              "start": 35,
              "end": 51
            },
            "start": 34,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 51
        }
      ],
      "declare": false,
      "start": 30,
      "end": 52
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "types",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 72
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 74
                  },
                  "start": 67,
                  "end": 74
                },
                "typeArguments": null,
                "start": 60,
                "end": 74
              },
              "start": 58,
              "end": 74
            },
            "start": 57,
            "end": 74
          },
          "init": null,
          "definite": false,
          "start": 57,
          "end": 74
        }
      ],
      "declare": false,
      "start": 53,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "types",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 96
                },
                "typeArguments": null,
                "start": 84,
                "end": 96
              },
              "start": 82,
              "end": 96
            },
            "start": 81,
            "end": 96
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 197
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 208
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 212,
                    "end": 215
                  },
                  "start": 199,
                  "end": 215
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 196,
                "end": 215
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 220
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 231
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 235,
                    "end": 238
                  },
                  "start": 222,
                  "end": 238
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 219,
                "end": 238
              }
            ],
            "start": 99,
            "end": 241
          },
          "definite": false,
          "start": 81,
          "end": 241
        }
      ],
      "declare": false,
      "start": 77,
      "end": 241
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 241
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 12,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "'./a'",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 37,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "let",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 60,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 77,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 84,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 199,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 209,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 222,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 232,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  }
]
```
