__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 17,
              "end": 18
            },
            "definite": false,
            "start": 13,
            "end": 18
          }
        ],
        "declare": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "init": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 37,
              "end": 40
            },
            "definite": false,
            "start": 33,
            "end": 40
          }
        ],
        "declare": false,
        "start": 27,
        "end": 41
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 20,
      "end": 41
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "E1",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 56
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 60
              },
              "initializer": {
                "type": "Literal",
                "value": "ENUM_KEY",
                "raw": "\"ENUM_KEY\"",
                "start": 63,
                "end": 73
              },
              "computed": false,
              "start": 59,
              "end": 73
            }
          ],
          "start": 57,
          "end": 75
        },
        "const": false,
        "declare": false,
        "start": 49,
        "end": 75
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 42,
      "end": 75
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "E2",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 90
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 94
              },
              "initializer": null,
              "computed": false,
              "start": 93,
              "end": 94
            }
          ],
          "start": 91,
          "end": 96
        },
        "const": false,
        "declare": false,
        "start": 83,
        "end": 96
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 76,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 27,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 42,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 49,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "String",
    "value": "\"ENUM_KEY\"",
    "start": 63,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 83,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
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
            "name": "keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 16
          },
          "start": 7,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 22,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 38
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 48,
                    "end": 52
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 54
                  },
                  "optional": false,
                  "computed": false,
                  "start": 48,
                  "end": 54
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 57,
                  "end": 58
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 47,
                "end": 58
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 69
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 71
                  },
                  "optional": false,
                  "computed": false,
                  "start": 65,
                  "end": 71
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 74,
                  "end": 75
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 64,
                "end": 75
              }
            ],
            "start": 41,
            "end": 91
          },
          "definite": false,
          "start": 36,
          "end": 91
        }
      ],
      "declare": false,
      "start": 30,
      "end": 91
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 101
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 115
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 117
                  },
                  "optional": false,
                  "computed": false,
                  "start": 111,
                  "end": 117
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 120,
                  "end": 121
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 110,
                "end": 121
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 132
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 134
                  },
                  "optional": false,
                  "computed": false,
                  "start": 128,
                  "end": 134
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 137,
                  "end": 138
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 127,
                "end": 138
              }
            ],
            "start": 104,
            "end": 154
          },
          "definite": false,
          "start": 99,
          "end": 154
        }
      ],
      "declare": false,
      "start": 93,
      "end": 154
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 164
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 178
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 181
                    },
                    "optional": false,
                    "computed": false,
                    "start": 174,
                    "end": 181
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 183
                  },
                  "optional": false,
                  "computed": false,
                  "start": 174,
                  "end": 183
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 186,
                  "end": 187
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 173,
                "end": 187
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 198
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 201
                    },
                    "optional": false,
                    "computed": false,
                    "start": 194,
                    "end": 201
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 203
                  },
                  "optional": false,
                  "computed": false,
                  "start": 194,
                  "end": 203
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 206,
                  "end": 207
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 193,
                "end": 207
              }
            ],
            "start": 167,
            "end": 223
          },
          "definite": false,
          "start": 162,
          "end": 223
        }
      ],
      "declare": false,
      "start": 156,
      "end": 223
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 233
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 247
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 250
                    },
                    "optional": false,
                    "computed": false,
                    "start": 243,
                    "end": 250
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 252
                  },
                  "optional": false,
                  "computed": false,
                  "start": 243,
                  "end": 252
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 255,
                  "end": 256
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 242,
                "end": 256
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 267
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 270
                    },
                    "optional": false,
                    "computed": false,
                    "start": 263,
                    "end": 270
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 272
                  },
                  "optional": false,
                  "computed": false,
                  "start": 263,
                  "end": 272
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 275,
                  "end": 276
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 262,
                "end": 276
              }
            ],
            "start": 236,
            "end": 292
          },
          "definite": false,
          "start": 231,
          "end": 292
        }
      ],
      "declare": false,
      "start": 225,
      "end": 292
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 292
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
    "value": "keys",
    "start": 12,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 17,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 128,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 156,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 179,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 225,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  }
]
```
