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
        "name": "X",
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
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "illegalBeforeProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 42
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 51
              },
              "optional": false,
              "computed": false,
              "start": 45,
              "end": 51
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 52
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "okBeforeMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 78
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 82
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 89
              },
              "optional": false,
              "computed": false,
              "start": 81,
              "end": 89
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 57,
            "end": 90
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "illegal2",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 111
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "After",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 119
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 124
              },
              "optional": false,
              "computed": false,
              "start": 114,
              "end": 124
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 96,
            "end": 125
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "illegal3",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 145
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "After",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 153
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 160
              },
              "optional": false,
              "computed": false,
              "start": 148,
              "end": 160
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 130,
            "end": 161
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 177
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 13,
              "raw": "13",
              "start": 180,
              "end": 182
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 166,
            "end": 183
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
              "start": 195,
              "end": 201
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
                "start": 204,
                "end": 207
              },
              "expression": false,
              "start": 201,
              "end": 207
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 188,
            "end": 207
          }
        ],
        "start": 8,
        "end": 209
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 209
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "After",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 221
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 239
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 242,
              "end": 244
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 228,
            "end": 245
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
              "start": 257,
              "end": 263
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
                "start": 266,
                "end": 269
              },
              "expression": false,
              "start": 263,
              "end": 269
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 250,
            "end": 269
          }
        ],
        "start": 222,
        "end": 272
      },
      "abstract": false,
      "declare": false,
      "start": 210,
      "end": 272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 273
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
    "value": "X",
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
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "illegalBeforeProperty",
    "start": 21,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 47,
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
    "value": "static",
    "start": 57,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "okBeforeMethod",
    "start": 64,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 96,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "illegal2",
    "start": 103,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "After",
    "start": 114,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 130,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "illegal3",
    "start": 137,
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
    "value": "After",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 166,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 188,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 210,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "After",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 228,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 235,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 250,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
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
