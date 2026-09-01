__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiM",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 51
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 90
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 91,
                "end": 98
              },
              "abstract": false,
              "declare": false,
              "start": 83,
              "end": 98
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 76,
            "end": 98
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 133
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 134,
                "end": 141
              },
              "abstract": false,
              "declare": false,
              "start": 126,
              "end": 141
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 119,
            "end": 141
          }
        ],
        "start": 52,
        "end": 143
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 35,
      "end": 143
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiM",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 188
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 235
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 236,
                "end": 243
              },
              "abstract": false,
              "declare": false,
              "start": 228,
              "end": 243
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 221,
            "end": 243
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 279
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 280,
                "end": 287
              },
              "abstract": false,
              "declare": false,
              "start": 272,
              "end": 287
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 265,
            "end": 287
          }
        ],
        "start": 189,
        "end": 289
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 172,
      "end": 289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiM",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 300
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 302
          },
          "optional": false,
          "computed": false,
          "start": 294,
          "end": 302
        },
        "typeArguments": null,
        "arguments": [],
        "start": 290,
        "end": 304
      },
      "directive": null,
      "start": 290,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiM",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 316
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 318
          },
          "optional": false,
          "computed": false,
          "start": 310,
          "end": 318
        },
        "typeArguments": null,
        "arguments": [],
        "start": 306,
        "end": 320
      },
      "directive": null,
      "start": 306,
      "end": 321
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 321
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 35,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "multiM",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 119,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 126,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 172,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "multiM",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 221,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 228,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 265,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "multiM",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 306,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "multiM",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  }
]
```
