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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 50
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 53,
                "end": 54
              },
              "operator": "+",
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 57,
                "end": 59
              },
              "start": 53,
              "end": 59
            },
            "definite": false,
            "start": 49,
            "end": 59
          }
        ],
        "declare": false,
        "start": 43,
        "end": 60
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 36,
      "end": 60
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Aleph",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 216
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 222
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 224,
                  "end": 230
                },
                "start": 222,
                "end": 230
              },
              "accessibility": null,
              "static": false,
              "start": 221,
              "end": 231
            }
          ],
          "start": 217,
          "end": 233
        },
        "declare": false,
        "start": 201,
        "end": 233
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 194,
      "end": 233
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bet",
          "optional": false,
          "typeAnnotation": null,
          "start": 248,
          "end": 251
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Aleph",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 268
            },
            "typeArguments": null,
            "start": 263,
            "end": 268
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 274
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 276,
                  "end": 282
                },
                "start": 274,
                "end": 282
              },
              "value": {
                "type": "Literal",
                "value": "lol",
                "raw": "'lol'",
                "start": 285,
                "end": 290
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 273,
              "end": 291
            }
          ],
          "start": 269,
          "end": 330
        },
        "abstract": false,
        "declare": false,
        "start": 242,
        "end": 330
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 235,
      "end": 330
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 36,
  "end": 330
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 36,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 194,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 201,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "Aleph",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 221,
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
    "value": "number",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 235,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 242,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Bet",
    "start": 248,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 252,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Aleph",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "String",
    "value": "'lol'",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  }
]
```
