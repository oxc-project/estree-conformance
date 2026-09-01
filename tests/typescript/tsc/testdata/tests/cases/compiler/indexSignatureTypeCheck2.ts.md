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
        "name": "IPropertySet",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 33,
                    "end": 39
                  },
                  "start": 31,
                  "end": 39
                },
                "start": 26,
                "end": 39
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 42,
                "end": 45
              },
              "start": 40,
              "end": 45
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 25,
            "end": 45
          }
        ],
        "start": 19,
        "end": 47
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 47
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
            "name": "ps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPropertySet",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 69
                },
                "typeArguments": null,
                "start": 57,
                "end": 69
              },
              "start": 55,
              "end": 69
            },
            "start": 53,
            "end": 69
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 72,
            "end": 76
          },
          "definite": false,
          "start": 53,
          "end": 76
        }
      ],
      "declare": false,
      "start": 49,
      "end": 77
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
            "name": "index",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 89,
                "end": 92
              },
              "start": 87,
              "end": 92
            },
            "start": 82,
            "end": 92
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 95,
            "end": 102
          },
          "definite": false,
          "start": 82,
          "end": 102
        }
      ],
      "declare": false,
      "start": 78,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ps",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 106
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 112
          },
          "optional": false,
          "computed": true,
          "start": 104,
          "end": 113
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 116,
          "end": 118
        },
        "start": 104,
        "end": 118
      },
      "directive": null,
      "start": 104,
      "end": 119
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "indexErrors",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 142
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 155,
                    "end": 161
                  },
                  "start": 153,
                  "end": 161
                },
                "start": 150,
                "end": 161
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 149,
            "end": 163
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 174
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 176,
                      "end": 179
                    },
                    "start": 176,
                    "end": 181
                  },
                  "start": 174,
                  "end": 181
                },
                "value": null,
                "start": 169,
                "end": 181
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 168,
            "end": 183
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p4",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 193,
                    "end": 199
                  },
                  "start": 191,
                  "end": 199
                },
                "start": 189,
                "end": 199
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p5",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 206,
                    "end": 212
                  },
                  "start": 204,
                  "end": 212
                },
                "start": 201,
                "end": 212
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 188,
            "end": 214
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p6",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 224,
                    "end": 230
                  },
                  "start": 222,
                  "end": 230
                },
                "start": 220,
                "end": 230
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 237
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 239,
                      "end": 242
                    },
                    "start": 239,
                    "end": 244
                  },
                  "start": 237,
                  "end": 244
                },
                "value": null,
                "start": 232,
                "end": 244
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 219,
            "end": 246
          }
        ],
        "start": 143,
        "end": 248
      },
      "declare": false,
      "start": 121,
      "end": 248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 248
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
    "value": "IPropertySet",
    "start": 6,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 49,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "ps",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "IPropertySet",
    "start": 57,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Null",
    "value": "null",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 78,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "ps",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 121,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "indexErrors",
    "start": 131,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "string",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 232,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "p7",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  }
]
```
