__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1041,
        "end": 1044
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1045,
              "end": 1046
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1045,
            "end": 1046
          }
        ],
        "start": 1044,
        "end": 1047
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1053,
                  "end": 1054
                },
                "typeArguments": null,
                "start": 1053,
                "end": 1054
              },
              "start": 1053,
              "end": 1056
            },
            "start": 1051,
            "end": 1056
          },
          "start": 1048,
          "end": 1056
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1059,
            "end": 1060
          },
          "typeArguments": null,
          "start": 1059,
          "end": 1060
        },
        "start": 1057,
        "end": 1060
      },
      "body": null,
      "expression": false,
      "start": 1024,
      "end": 1061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1062,
            "end": 1065
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [],
              "start": 1066,
              "end": 1068
            }
          ],
          "optional": false,
          "start": 1062,
          "end": 1069
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 1070,
          "end": 1073
        },
        "optional": false,
        "computed": false,
        "start": 1062,
        "end": 1073
      },
      "directive": null,
      "start": 1062,
      "end": 1074
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 1024,
  "end": 1074
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1024,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1032,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1048,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1062,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  }
]
```
