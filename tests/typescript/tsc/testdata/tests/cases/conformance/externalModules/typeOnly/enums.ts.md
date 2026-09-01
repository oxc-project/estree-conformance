__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportClause",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 32
            },
            "initializer": null,
            "computed": false,
            "start": 20,
            "end": 32
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExportDeclaration",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 53
            },
            "initializer": null,
            "computed": false,
            "start": 36,
            "end": 53
          }
        ],
        "start": 16,
        "end": 55
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SymbolFlags",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 79
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 88
            },
            "initializer": {
              "type": "Literal",
              "value": "Type",
              "raw": "\"Type\"",
              "start": 91,
              "end": 97
            },
            "computed": false,
            "start": 84,
            "end": 97
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 106
            },
            "initializer": {
              "type": "Literal",
              "value": "Value",
              "raw": "\"Value\"",
              "start": 109,
              "end": 116
            },
            "computed": false,
            "start": 101,
            "end": 116
          }
        ],
        "start": 80,
        "end": 118
      },
      "const": true,
      "declare": false,
      "start": 57,
      "end": 118
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
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 144
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 144
          },
          "exportKind": "value",
          "start": 134,
          "end": 144
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 120,
      "end": 147
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
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 168
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 168
          },
          "exportKind": "value",
          "start": 157,
          "end": 168
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 148,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 5,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "ImportClause",
    "start": 20,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "ExportDeclaration",
    "start": 36,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 63,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "SymbolFlags",
    "start": 68,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "String",
    "value": "\"Type\"",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"Value\"",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 120,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 134,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "SymbolFlags",
    "start": 157,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 24
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 24
          },
          "importKind": "value",
          "start": 14,
          "end": 24
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 37
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 37
          },
          "importKind": "value",
          "start": 26,
          "end": 37
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 45,
        "end": 50
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 51
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "SyntaxKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 63
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImportClause",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 76
        },
        "optional": false,
        "computed": false,
        "start": 53,
        "end": 76
      },
      "directive": null,
      "start": 53,
      "end": 77
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "SymbolFlags",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 89
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 94
        },
        "optional": false,
        "computed": false,
        "start": 78,
        "end": 94
      },
      "directive": null,
      "start": 78,
      "end": 95
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
            "name": "kind",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 116
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ImportClause",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 129
                  },
                  "start": 106,
                  "end": 129
                },
                "typeArguments": null,
                "start": 106,
                "end": 129
              },
              "start": 104,
              "end": 129
            },
            "start": 100,
            "end": 129
          },
          "init": null,
          "definite": false,
          "start": 100,
          "end": 129
        }
      ],
      "declare": false,
      "start": 96,
      "end": 130
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
            "name": "flags",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SymbolFlags",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 153
                },
                "typeArguments": null,
                "start": 142,
                "end": 153
              },
              "start": 140,
              "end": 153
            },
            "start": 135,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 135,
          "end": 153
        }
      ],
      "declare": false,
      "start": 131,
      "end": 154
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeFlag",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 169
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 183
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 188
          },
          "start": 172,
          "end": 188
        },
        "typeArguments": null,
        "start": 172,
        "end": 188
      },
      "declare": false,
      "start": 156,
      "end": 189
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
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 212
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 212
          },
          "exportKind": "value",
          "start": 204,
          "end": 212
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 190,
      "end": 215
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 216
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
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 14,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "SymbolFlags",
    "start": 26,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 40,
    "end": 44
  },
  {
    "type": "String",
    "value": "'./a'",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 53,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "ImportClause",
    "start": 64,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "SymbolFlags",
    "start": 78,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 96,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 106,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "ImportClause",
    "start": 117,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 131,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "SymbolFlags",
    "start": 142,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 156,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "TypeFlag",
    "start": 161,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "SymbolFlags",
    "start": 172,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 190,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "TypeFlag",
    "start": 204,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 28,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 57
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 57
          },
          "importKind": "value",
          "start": 49,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "'./b'",
        "start": 65,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 35,
      "end": 71
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
            "name": "flags",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeFlag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 93
                },
                "typeArguments": null,
                "start": 85,
                "end": 93
              },
              "start": 83,
              "end": 93
            },
            "start": 78,
            "end": 93
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "SymbolFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 107
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 112
            },
            "optional": false,
            "computed": false,
            "start": 96,
            "end": 112
          },
          "definite": false,
          "start": 78,
          "end": 112
        }
      ],
      "declare": false,
      "start": 72,
      "end": 113
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 113
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
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "SymbolFlags",
    "start": 9,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27
  },
  {
    "type": "String",
    "value": "'./a'",
    "start": 28,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "TypeFlag",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 60,
    "end": 64
  },
  {
    "type": "String",
    "value": "'./b'",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 72,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "TypeFlag",
    "start": 85,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "SymbolFlags",
    "start": 96,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  }
]
```
