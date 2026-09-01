__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 32,
                "end": 33
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 21,
              "end": 34
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 40
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 43,
                "end": 44
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 39,
              "end": 45
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 56
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 59,
                  "end": 62
                },
                "expression": false,
                "start": 56,
                "end": 62
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 50,
              "end": 62
            }
          ],
          "start": 15,
          "end": 64
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 64
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 64
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 81
          },
          "exportKind": "value",
          "start": 74,
          "end": 81
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 65,
      "end": 84
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 106
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 114
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 116,
                "end": 119
              },
              "start": 116,
              "end": 121
            },
            "start": 114,
            "end": 121
          },
          "value": null,
          "start": 107,
          "end": 121
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 124,
          "end": 127
        },
        "start": 122,
        "end": 127
      },
      "body": null,
      "expression": false,
      "start": 86,
      "end": 128
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 133
            },
            "start": 129,
            "end": 133
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 148
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 166,
                "end": 167
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 155,
              "end": 168
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 174
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 177,
                "end": 178
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 173,
              "end": 179
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 190
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 193,
                  "end": 196
                },
                "expression": false,
                "start": 190,
                "end": 196
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 184,
              "end": 196
            }
          ],
          "start": 149,
          "end": 198
        },
        "abstract": false,
        "declare": false,
        "start": 141,
        "end": 198
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 198
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
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 209
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "D2",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 215
          },
          "exportKind": "value",
          "start": 208,
          "end": 215
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 199,
      "end": 218
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 227
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 228,
        "end": 231
      },
      "abstract": false,
      "declare": false,
      "start": 220,
      "end": 231
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
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          },
          "exportKind": "value",
          "start": 240,
          "end": 241
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 232,
      "end": 243
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 243
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 21,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 76,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 86,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 94,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 107,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 130,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 134,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 141,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 155,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 210,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 220,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  }
]
```
