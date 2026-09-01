__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "public",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
        "end": 29
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 30,
        "end": 33
      },
      "declare": false,
      "start": 13,
      "end": 33
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "implements",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 54
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 64
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "package",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 72
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "protected",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 83
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 61,
            "end": 85
          }
        ],
        "start": 55,
        "end": 87
      },
      "declare": false,
      "start": 34,
      "end": 87
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "package",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 100
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 101,
        "end": 104
      },
      "const": false,
      "declare": false,
      "start": 88,
      "end": 104
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 113
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 126
            },
            "initializer": null,
            "computed": false,
            "start": 120,
            "end": 126
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 139
            },
            "initializer": null,
            "computed": false,
            "start": 132,
            "end": 139
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "pacakge",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 152
            },
            "initializer": null,
            "computed": false,
            "start": 145,
            "end": 152
          }
        ],
        "start": 114,
        "end": 154
      },
      "const": false,
      "declare": false,
      "start": 105,
      "end": 154
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "private",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 174
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 187
            },
            "initializer": null,
            "computed": false,
            "start": 181,
            "end": 187
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 200
            },
            "initializer": null,
            "computed": false,
            "start": 193,
            "end": 200
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "pacakge",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 213
            },
            "initializer": null,
            "computed": false,
            "start": 206,
            "end": 213
          }
        ],
        "start": 175,
        "end": 215
      },
      "const": true,
      "declare": false,
      "start": 156,
      "end": 215
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 231
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 244
            },
            "initializer": null,
            "computed": false,
            "start": 238,
            "end": 244
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 257
            },
            "initializer": null,
            "computed": false,
            "start": 250,
            "end": 257
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "pacakge",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 270
            },
            "initializer": null,
            "computed": false,
            "start": 263,
            "end": 270
          }
        ],
        "start": 232,
        "end": 272
      },
      "const": true,
      "declare": false,
      "start": 217,
      "end": 272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 272
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 0,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 13,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 34,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "implements",
    "start": 44,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "protected",
    "start": 74,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 88,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 105,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "pacakge",
    "start": 145,
    "end": 152
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
    "type": "Keyword",
    "value": "enum",
    "start": 162,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 193,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "pacakge",
    "start": 206,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 217,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 223,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 250,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "pacakge",
    "start": 263,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  }
]
```
