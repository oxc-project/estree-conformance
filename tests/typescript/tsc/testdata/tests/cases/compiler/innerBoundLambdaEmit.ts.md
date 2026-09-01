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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 34
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 35,
                "end": 42
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 42
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 42
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 54
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 63,
                    "end": 66
                  },
                  "id": null,
                  "generator": false,
                  "start": 57,
                  "end": 66
                },
                "definite": false,
                "start": 51,
                "end": 66
              }
            ],
            "declare": false,
            "start": 47,
            "end": 67
          }
        ],
        "start": 12,
        "end": 69
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 69
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 85
      },
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
              "start": 86,
              "end": 87
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 86,
            "end": 87
          }
        ],
        "start": 85,
        "end": 88
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 100
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 105
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 109
                  },
                  "start": 104,
                  "end": 109
                },
                "typeArguments": null,
                "start": 104,
                "end": 109
              },
              "start": 102,
              "end": 109
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 95,
            "end": 109
          }
        ],
        "start": 89,
        "end": 111
      },
      "declare": false,
      "start": 70,
      "end": 111
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 111
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 70,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "toFoo",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  }
]
```
