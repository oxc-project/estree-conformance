__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "pkg",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "start": 7,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./package.json",
        "raw": "\"./package.json\"",
        "start": 16,
        "end": 32
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 44
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 46,
            "end": 52
          },
          "start": 40,
          "end": 52
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 55
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 73
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "pkg",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 79
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 84
              },
              "optional": false,
              "computed": false,
              "start": 76,
              "end": 84
            },
            "definite": false,
            "start": 69,
            "end": 84
          }
        ],
        "declare": false,
        "start": 63,
        "end": 85
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 56,
      "end": 85
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 100
          },
          "start": 93,
          "end": 100
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./package.json",
        "raw": "\"./package.json\"",
        "start": 106,
        "end": 122
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 134
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 136,
            "end": 142
          },
          "start": 130,
          "end": 142
        }
      ],
      "importKind": "value",
      "start": 86,
      "end": 145
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 164
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 169
            },
            "definite": false,
            "start": 159,
            "end": 169
          }
        ],
        "declare": false,
        "start": 153,
        "end": 170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 170
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "name2",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 189
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 194
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 202
                },
                "optional": false,
                "computed": false,
                "start": 192,
                "end": 202
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 207
              },
              "optional": false,
              "computed": false,
              "start": 192,
              "end": 207
            },
            "definite": false,
            "start": 184,
            "end": 207
          }
        ],
        "declare": false,
        "start": 178,
        "end": 208
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 171,
      "end": 208
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 208
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
    "value": "pkg",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./package.json\"",
    "start": 16,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 56,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 63,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "pkg",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 98,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 101,
    "end": 105
  },
  {
    "type": "String",
    "value": "\"./package.json\"",
    "start": 106,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 123,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 146,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 171,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "name2",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "pkg",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "start": 7,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./package.json",
        "raw": "\"./package.json\"",
        "start": 16,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 51
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "pkg",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 57
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 62
              },
              "optional": false,
              "computed": false,
              "start": 54,
              "end": 62
            },
            "definite": false,
            "start": 47,
            "end": 62
          }
        ],
        "declare": false,
        "start": 41,
        "end": 63
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 34,
      "end": 63
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 78
          },
          "start": 71,
          "end": 78
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./package.json",
        "raw": "\"./package.json\"",
        "start": 84,
        "end": 100
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 64,
      "end": 101
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 120
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "definite": false,
            "start": 115,
            "end": 125
          }
        ],
        "declare": false,
        "start": 109,
        "end": 126
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 102,
      "end": 126
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "name2",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 145
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 150
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 158
                },
                "optional": false,
                "computed": false,
                "start": 148,
                "end": 158
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 163
              },
              "optional": false,
              "computed": false,
              "start": 148,
              "end": 163
            },
            "definite": false,
            "start": 140,
            "end": 163
          }
        ],
        "declare": false,
        "start": 134,
        "end": 164
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 127,
      "end": 164
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 164
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
    "value": "pkg",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./package.json\"",
    "start": 16,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 34,
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
    "value": "name",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "pkg",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 73,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 76,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 79,
    "end": 83
  },
  {
    "type": "String",
    "value": "\"./package.json\"",
    "start": 84,
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
    "value": "export",
    "start": 102,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 127,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "name2",
    "start": 140,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "pkg",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "start": 7,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./package.json",
        "raw": "\"./package.json\"",
        "start": 16,
        "end": 32
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 44
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 46,
            "end": 52
          },
          "start": 40,
          "end": 52
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 55
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 73
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "pkg",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 79
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 84
              },
              "optional": false,
              "computed": false,
              "start": 76,
              "end": 84
            },
            "definite": false,
            "start": 69,
            "end": 84
          }
        ],
        "declare": false,
        "start": 63,
        "end": 85
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 56,
      "end": 85
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 100
          },
          "start": 93,
          "end": 100
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./package.json",
        "raw": "\"./package.json\"",
        "start": 106,
        "end": 122
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 134
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 136,
            "end": 142
          },
          "start": 130,
          "end": 142
        }
      ],
      "importKind": "value",
      "start": 86,
      "end": 145
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 164
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 169
            },
            "definite": false,
            "start": 159,
            "end": 169
          }
        ],
        "declare": false,
        "start": 153,
        "end": 170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 170
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "name2",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 189
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 194
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 202
                },
                "optional": false,
                "computed": false,
                "start": 192,
                "end": 202
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 207
              },
              "optional": false,
              "computed": false,
              "start": 192,
              "end": 207
            },
            "definite": false,
            "start": 184,
            "end": 207
          }
        ],
        "declare": false,
        "start": 178,
        "end": 208
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 171,
      "end": 208
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 208
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
    "value": "pkg",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./package.json\"",
    "start": 16,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 56,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 63,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "pkg",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 98,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 101,
    "end": 105
  },
  {
    "type": "String",
    "value": "\"./package.json\"",
    "start": 106,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 123,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 146,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 171,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "name2",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  }
]
```
